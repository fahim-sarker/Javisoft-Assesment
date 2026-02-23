import SingleProduct from "@/app/_components/SingleProduct";

export default async function Page({ params }) {
  const { id } = await params;

  return <SingleProduct id={id} />;
}
