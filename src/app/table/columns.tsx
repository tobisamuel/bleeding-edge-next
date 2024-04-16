import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import Status from "@/components/Status";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { formatAmountWithCommas } from "@/lib/utils";

export type Transaction = {
  ref: string;
  createdAt: string;
  desc: string;
  icon: null | string;
  amount: number;
  transactionType: string;
  status: string;
  data: {
    ref: string;
    createdAt: string;
    amount: string;
    typeName: string;
    descTemplate: string;
    status: string;
    accountName: string | null;
    accountNo: string | null;
    narration: string | null;
    providerRef: string | null;
    bankName: string | null;
  };
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "desc",
    header: "Description",
  },
  {
    accessorKey: "ref",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Reference
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = formatAmountWithCommas(amount);

      return <div className="font-medium">{formatted}</div>;
    },
    aggregationFn: "sum",
    aggregatedCell: ({ getValue }) => {
      const formatted = formatAmountWithCommas(getValue<number>());

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date;
      const formatted = dayjs(date).locale("en").format("DD MMM YYYY");

      return <div>{formatted}</div>;
    },
    getGroupingValue: ({ createdAt }) => {
      return dayjs(createdAt).locale("en").format("DD MMM YYYY");
    },
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      return <Status status={status} />;
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
