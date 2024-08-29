import React from "react";

import { LuMoreHorizontal } from "react-icons/lu";

import { cn } from "@/utils";

import LinkCard from "./link-card";

type TableDataType = {
  name: string;
  price: string;
  status: "Paid" | "Pending" | "Returned";
};

const TABLE_DATA: TableDataType[] = [
  {
    name: "Alex Cooper",
    price: "$1042.25",
    status: "Paid",
  },
  {
    name: "Leonard Krasner",
    price: "$1042.25",
    status: "Pending",
  },
  {
    name: "Cameron Williamson",
    price: "$1042.25",
    status: "Paid",
  },
  {
    name: "Lindsay Walton",
    price: "$1042.25",
    status: "Returned",
  },
];

const ShowcaseTable = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-table--docs"
      label="Table"
    >
      <div className="overflow-auto rounded-xl border border-border">
        <table className="relative text-sm">
          <thead className="h-8 bg-accent">
            <tr className="border-b border-border text-left">
              <th className="px-3 py-2 text-xs font-semibold">Customer</th>
              <th className="px-3 py-2 text-xs font-semibold">Total</th>
              <th className="px-3 py-2 text-xs font-semibold">Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border bg-card">
            {TABLE_DATA.map((user) => (
              <RenderTableCell key={user.name} {...user} />
            ))}
          </tbody>
        </table>
      </div>
    </LinkCard>
  );
};

const RenderTableCell = ({ name, price, status }: TableDataType) => {
  const statusColor =
    status === "Paid"
      ? "bg-green-500 ring-green-200"
      : status === "Pending"
        ? "bg-yellow-500 ring-yellow-200"
        : "bg-red-500 ring-red-200";

  return (
    <tr className="text-left">
      <td className="block max-w-32 truncate px-3 py-2 align-middle text-xs">
        {name}
      </td>
      <td className="px-3 py-2 align-middle text-xs">{price}</td>
      <td className="px-3 py-2 align-middle text-xs">
        <p className="flex items-center gap-2 text-xs text-neutral-700">
          <span
            className={cn("block h-1.5 w-1.5 rounded-full ring", statusColor)}
          ></span>
          <span>{status}</span>
        </p>
      </td>

      <td className="px-3 py-2 align-middle text-sm">
        <LuMoreHorizontal />
      </td>
    </tr>
  );
};

export default ShowcaseTable;