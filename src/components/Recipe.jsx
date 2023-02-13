import React, { useState, useEffect } from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
} from "@syncfusion/ej2-react-grids";
import { RecipeColumn, RecipeData } from "../data/Data";
// import data from "../data/dataSource.json";
import "./test.css";

const Recipe = () => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };
  // const [data, setData] = useState([]);

  useEffect(() => {
    const getEmployee = async () => {
      let list = ["title", "asdfad"];
      try {
        // setData(list);
        console.log(RecipeData);
      } catch (err) {
        console.log(err);
      }
    };
    getEmployee();
  }, []);

  return (
    <div className="flex flex-col rounded-2xl bg-white">
      <div className="m-2 p-20 rounded-2xl bg-white">
        <GridComponent
          dataSource={RecipeData}
          width="1200px"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            {RecipeColumn.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Page]} />
        </GridComponent>
      </div>
      {/* <div className="flex flex-col p-10 bg-slate-400">
        <p>Meatballs</p>
        <p>Hunger: 62.5</p>
        <p>Sanity: 5</p>
        <p>Health: 5</p>
        <p></p>
      </div> */}
    </div>
  );
};

export default Recipe;
