"use client";

import { JSX } from "react";

export const TableHeader = (): JSX.Element => (
  <thead>
    <tr className="border-b border-gray-200 bg-gray-50">
      <th className="px-6 py-3 text-left">
        <input type="checkbox" className="rounded" />
      </th>
      <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">deal id</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">customer</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">product/service</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">deal value</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">close date</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">status</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">action</th>
    </tr>
  </thead>
);