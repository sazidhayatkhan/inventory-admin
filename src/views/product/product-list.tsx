'use client'
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProductTable from "@/components/table/product-table";

type Props = {};

const ProductListUI = (props: Props) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10; // can make this dynamic later

  const fetchProducts = async (pageNum: number) => {
    const res = await fetch(`http://localhost:5000/api/products?page=${pageNum}&limit=${limit}`);
    const data = await res.json();
    setProducts(data.products || []);
    setTotal(data.total || 0);
    setPage(data.page || 1);
  };

  const handleEdit = (product: any) => {
    console.log("Edit product:", product);
    // navigate to edit page or open modal
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts(page);
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);
  return (
    <div className="">
      <h1>Products</h1>
      <div className="flex justify-end">
        <Button>
          <Plus /> Add Product
        </Button>
      </div>
      <div className="mt-8">
        <ProductTable
          products={products}
          total={total}
          page={page}
          limit={limit}
          onPageChange={(newPage) => setPage(newPage)}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default ProductListUI;
