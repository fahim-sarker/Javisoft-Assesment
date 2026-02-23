"use client";
import { useQuery } from "@tanstack/react-query";
import {
  getCategoryFunction,
  getProductFunction,
  getSingleProductFunction,
} from "./data.api";

export const useProduct = () => {
  return useQuery({
    queryKey: ["get-products"],
    queryFn: getProductFunction,
    retry: false,
  });
};

export const useCategory = () => {
  return useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategoryFunction,
    retry: false,
  });
};

export const useSingleProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProductFunction(id),
    retry: false,
  });
};
