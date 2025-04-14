import { useState } from "react";
import HeaderWithCounter from "../components/headerWithCounter";
import { products } from "../data/product";
import "./ProductCatalog.css";
import Porduct from "../components/Product/Product";
import Search from "../components/Search/Search";

const PorductCatalog = () => {
  const [data, setData] = useState(products);

  const updateData = (newData) => {
    setData(newData);
  };
  const initData = () => {
    setData(products);
  };

  const deleteProductFromData = (id) => {
    console.log(id);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="catalog_container">
      <h2>Produktų katalogas</h2>
      <HeaderWithCounter title="Prekes" count={data.length} />
      <Search
        items={data}
        onSearchButtonClick={updateData}
        onResetButtonClick={initData}
      />
      {data.length > 0 &&
        data.map((item) => {
          return (
            <Porduct product={item} onDeleteAction={deleteProductFromData} />
          );
        })}
      {data.length === 0 && <h4>Nėra prekių</h4>}
    </div>
  );
};
export default PorductCatalog;
