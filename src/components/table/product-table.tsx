// components/ProductTable.tsx
import React from "react";

type Product = {
  _id: string;
  name: string;
  category: { name: string; description?: string };
  supplier: { name: string };
  quantity: number;
};

interface ProductTableProps {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  onPageChange: (newPage: number) => void;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
}

export default function ProductTable({
  products,
  total,
  page,
  limit,
  onPageChange,
  onEdit,
  onDelete,
}: ProductTableProps) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-xs uppercase">
            <th className="px-6 py-3 text-left">Product Name</th>
            <th className="px-6 py-3 text-left">Product ID</th>
            <th className="px-6 py-3 text-left">Category</th>
            <th className="px-6 py-3 text-left">Supplier</th>
            <th className="px-6 py-3 text-left">Quantity</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr
              key={product._id}
              className={`border-t text-gray-700 text-sm ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product._id}</td>
              <td className="px-6 py-4">{product.category?.name || "—"}</td>
              <td className="px-6 py-4">{product.supplier?.name || "—"}</td>
              <td className="px-6 py-4">{product.quantity}</td>
              <td className="px-6 py-4 flex gap-2">
                <button
                  onClick={() => onEdit?.(product)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete?.(product._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center px-6 py-4 border-t bg-gray-50">
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages} — {total} products
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className={`px-3 py-1 rounded-lg text-sm ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            Prev
          </button>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages}
            className={`px-3 py-1 rounded-lg text-sm ${
              page === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
