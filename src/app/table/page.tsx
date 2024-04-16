"use client";

import { columns, Transaction } from "./columns";
import { DataTable } from "./data-table";

const data = [
  {
    ref: "zxE7ybn7lXWh",
    createdAt: "2023-09-19 09:47:08",
    desc: "Bank Transfer",
    icon: null,
    amount: "5100",
    transactionType: "transfer",
    status: "COMPLETED",
    data: {
      ref: "zxE7ybn7lXWh",
      createdAt: "2023-09-19 09:47:08",
      amount: "5100.00",
      typeName: "Bank Transfer",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "BLESSING  OSU",
      accountNo: "0742381051",
      narration: "office water",
      providerRef: "999999230919094717590363504919",
      bankName: "GTBank Plc",
    },
  },
  {
    ref: "Nv1QqSIv3I1s",
    createdAt: "2023-09-19 09:35:30",
    desc: "Bank Transfer",
    icon: null,
    amount: "50000",
    transactionType: "transfer",
    status: "COMPLETED",
    data: {
      ref: "Nv1QqSIv3I1s",
      createdAt: "2023-09-19 09:35:30",
      amount: "50000.00",
      typeName: "Bank Transfer",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "SOBECHUKWU KINDNESS IFEDI",
      accountNo: "2399888267",
      narration: "business loan",
      providerRef: "999999230919093543407208917238",
      bankName: "Zenith Bank Plc",
    },
  },
  {
    ref: "xezb6mz16qLg",
    createdAt: "2023-09-19 09:25:41",
    desc: "Bank Transfer",
    icon: null,
    amount: "50000",
    transactionType: "transfer",
    status: "COMPLETED",
    data: {
      ref: "xezb6mz16qLg",
      createdAt: "2023-09-19 09:25:41",
      amount: "50000.00",
      typeName: "Bank Transfer",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "SOBECHUKWU KINDNESS IFEDI",
      accountNo: "2399888267",
      narration: "business loan",
      providerRef: "999999230919092551633130869583",
      bankName: "Zenith Bank Plc",
    },
  },
  {
    ref: "dp5hXkO2WYi1",
    createdAt: "2023-09-18 12:36:52",
    desc: "Bank Transfer",
    icon: null,
    amount: "8000",
    transactionType: "transfer",
    status: "COMPLETED",
    data: {
      ref: "dp5hXkO2WYi1",
      createdAt: "2023-09-18 12:36:52",
      amount: "8000.00",
      typeName: "Bank Transfer",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "SOBECHUKWU KINDNESS IFEDI",
      accountNo: "2399888267",
      narration: "house exp refund",
      providerRef: "999999230918123702774956581724",
      bankName: "Zenith Bank Plc",
    },
  },
  {
    ref: "OtWXMV15ZzSy",
    createdAt: "2023-09-18 12:36:34",
    desc: "Bank Transfer",
    icon: null,
    amount: "8000",
    transactionType: "transfer",
    status: "COMPLETED",
    data: {
      ref: "OtWXMV15ZzSy",
      createdAt: "2023-09-18 12:36:34",
      amount: "8000.00",
      typeName: "Bank Transfer",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "CHIBUIKE JONADAB ONWU",
      accountNo: "2173249981",
      narration: "house exp refund",
      providerRef: "999999230918123648367029524922",
      bankName: "Zenith Bank Plc",
    },
  },
  {
    ref: "wjjkVNKjGAv5",
    createdAt: "2023-09-16 11:12:25",
    desc: "Commission (Electricity Recharge)",
    icon: null,
    amount: "12",
    transactionType: "commission",
    status: "COMPLETED",
    data: {
      ref: "wjjkVNKjGAv5",
      createdAt: "2023-09-16 11:12:25",
      amount: "12.00",
      typeName: "Commission",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "Chibuike Onwu",
      accountNo: null,
      narration: null,
      providerRef: null,
      bankName: null,
    },
  },
  {
    ref: "jII9KSnthEwA",
    createdAt: "2023-09-16 11:10:44",
    desc: "Electricity Recharge",
    icon: "/media/discos/aedc.png",
    amount: "10000",
    transactionType: "electricity",
    status: "COMPLETED",
    data: {
      ref: "jII9KSnthEwA",
      createdAt: "2023-09-16 11:10:44",
      amount: "10000.00",
      typeName: "Electricity Recharge",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: null,
      accountNo: null,
      narration: null,
      providerRef: null,
      bankName: null,
    },
  },
  {
    ref: "Es75I83LDmSF",
    createdAt: "2023-09-16 11:03:18",
    desc: "SMS Charge",
    icon: null,
    amount: "4",
    transactionType: "charge",
    status: "COMPLETED",
    data: {
      ref: "Es75I83LDmSF",
      createdAt: "2023-09-16 11:03:18",
      amount: "4.00",
      typeName: "SMS Charge",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "Chibuike Onwu",
      accountNo: null,
      narration: null,
      providerRef: null,
      bankName: null,
    },
  },
  {
    ref: "WYWKLSar21cb",
    createdAt: "2023-09-16 10:58:52",
    desc: "SMS Charge",
    icon: null,
    amount: "4",
    transactionType: "charge",
    status: "COMPLETED",
    data: {
      ref: "WYWKLSar21cb",
      createdAt: "2023-09-16 10:58:52",
      amount: "4.00",
      typeName: "SMS Charge",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "Chibuike Onwu",
      accountNo: null,
      narration: null,
      providerRef: null,
      bankName: null,
    },
  },
  {
    ref: "ua2SQIQZgctV",
    createdAt: "2023-09-16 10:56:07",
    desc: "SMS Charge",
    icon: null,
    amount: "4",
    transactionType: "charge",
    status: "COMPLETED",
    data: {
      ref: "ua2SQIQZgctV",
      createdAt: "2023-09-16 10:56:07",
      amount: "4.00",
      typeName: "SMS Charge",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "Chibuike Onwu",
      accountNo: null,
      narration: null,
      providerRef: null,
      bankName: null,
    },
  },
  {
    ref: "Fq6iHyAQAABr",
    createdAt: "2023-09-16 10:55:32",
    desc: "SMS Charge",
    icon: null,
    amount: "4",
    transactionType: "charge",
    status: "COMPLETED",
    data: {
      ref: "Fq6iHyAQAABr",
      createdAt: "2023-09-16 10:55:32",
      amount: "4.00",
      typeName: "SMS Charge",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "Chibuike Onwu",
      accountNo: null,
      narration: null,
      providerRef: null,
      bankName: null,
    },
  },
  {
    ref: "UHP3EpraSikR",
    createdAt: "2023-09-16 10:40:00",
    desc: "SMS Charge",
    icon: null,
    amount: "4",
    transactionType: "charge",
    status: "COMPLETED",
    data: {
      ref: "UHP3EpraSikR",
      createdAt: "2023-09-16 10:40:00",
      amount: "4.00",
      typeName: "SMS Charge",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "Chibuike Onwu",
      accountNo: null,
      narration: null,
      providerRef: null,
      bankName: null,
    },
  },
  {
    ref: "w1xLh1HTgq9a",
    createdAt: "2023-09-15 17:45:58",
    desc: "SMS Charge",
    icon: null,
    amount: "4",
    transactionType: "charge",
    status: "COMPLETED",
    data: {
      ref: "w1xLh1HTgq9a",
      createdAt: "2023-09-15 17:45:58",
      amount: "4.00",
      typeName: "SMS Charge",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "Chibuike Onwu",
      accountNo: null,
      narration: null,
      providerRef: null,
      bankName: null,
    },
  },
  {
    ref: "42QSvVThM0Pi",
    createdAt: "2023-09-15 17:16:21",
    desc: "SMS Charge",
    icon: null,
    amount: "4",
    transactionType: "charge",
    status: "COMPLETED",
    data: {
      ref: "42QSvVThM0Pi",
      createdAt: "2023-09-15 17:16:21",
      amount: "4.00",
      typeName: "SMS Charge",
      descTemplate: "{{amount}} to {{account}}",
      status: "COMPLETED",
      accountName: "Chibuike Onwu",
      accountNo: null,
      narration: null,
      providerRef: null,
      bankName: null,
    },
  },
  {
    ref: "t0qpCixaSPfQ",
    createdAt: "2023-09-15 16:07:04",
    desc: "Wallet Topup",
    icon: null,
    amount: "5000",
    transactionType: "wallet-topup",
    status: "FAILED",
    data: {
      ref: "t0qpCixaSPfQ",
      createdAt: "2023-09-15 16:07:04",
      amount: "5000.00",
      typeName: "Wallet Topup",
      descTemplate: "{{amount}} to {{account}}",
      status: "FAILED",
      accountName: "Chibuike Onwu",
      accountNo: null,
      narration: null,
      providerRef: null,
      bankName: null,
    },
  },
];

const formattedData = data.map((item) => ({
  ...item,
  amount: Number(item.amount),
}));

export default function TablePage() {
  return (
    <div className="px-16 py-10">
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
}
