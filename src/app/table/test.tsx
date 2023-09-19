"use client";

import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import Status from "@/components/Status";

type Student = {
  studentId: number;
  name: string;
  dateOfBirth: string;
  major: string;
  status: string;
};

const defaultData: Student[] = [
  {
    studentId: 1,
    name: "Bahar Constantia",
    dateOfBirth: "1984-01-04",
    major: "Computer Science",
    status: "COMPLETED",
  },
  {
    studentId: 2,
    name: "Harold Nona",
    dateOfBirth: "1961-05-10",
    major: "Communications",
    status: "PENDING",
  },
  {
    studentId: 3,
    name: "Raginolf Arnulf",
    dateOfBirth: "1991-10-12",
    major: "Business",
    status: "FAILED",
  },
  {
    studentId: 4,
    name: "Marvyn Wendi",
    dateOfBirth: "1978-09-24",
    major: "Psychology",
    status: "COMPLETED",
  },
];

const obj = {
  success: "COMPLETED",
  pending: "PENDING",
  failed: "FAILED",
};

const columnHelper = createColumnHelper<Student>();

const columns = [
  columnHelper.accessor("studentId", {
    header: "Student ID",
  }),
  columnHelper.accessor("name", {
    header: "Full Name",
  }),
  columnHelper.accessor("dateOfBirth", {
    header: "DOB",
  }),
  columnHelper.accessor("major", {
    header: "Major",
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
];

export default function Table() {
  const [data, setData] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="h-screen flex w-full items-center justify-center">
      <div className="w-fit max-w-5xl mx-auto">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
