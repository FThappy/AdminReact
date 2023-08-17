import React from 'react'
import "./productList.css"
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { DeleteOutline } from "@mui/icons-material";
import Grid from "@mui/material/Grid";

export default function ProductList() {
    const [data, setData] = useState(productRows);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

    const columns = [
      {
        field: "id",
        headerName: "ID",
        width: windowWidth < 1800 ? 50 : 100,
        cellClassName: "productListId",
        headerClassName: "customHeader",
        headerAlign: "center",
        renderCell: (params) => {
          return (
            <Grid container justifyContent="center" alignItems="center">
              {params.value}
            </Grid>
          );
        },
      },
      {
        field: "product",
        headerName: "Product",
        width: windowWidth < 1800 ? 250 : 300,
        headerClassName: "customHeader",
        headerAlign: "center",
        renderCell: (params) => {
          return (
            <Grid container justifyContent="center" alignItems="center">
              <div className="productListName">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            </Grid>
          );
        },
      },
      {
        field: "stock",
        headerName: "Stock",
        width: windowWidth < 1800 ? 250 : 300,
        cellClassName: "productListStock",
        headerClassName: "customHeader",
        headerAlign: "center",
        renderCell: (params) => {
          return (
            <Grid container justifyContent="center" alignItems="center">
              {params.value}
            </Grid>
          );
        },
      },
      {
        field: "status",
        headerName: "Status",
        width: windowWidth < 1800 ? 150 : 200,
        cellClassName: "productListStatus",
        headerClassName: "customHeader",
        headerAlign: "center",
        renderCell: (params) => {
          return (
            <Grid container justifyContent="center" alignItems="center">
              {params.value}
            </Grid>
          );
        },
      },
      {
        field: "price",
        headerName: "Price",
        width: windowWidth < 1800 ? 250 : 300,
        cellClassName: "productListPrice",
        headerClassName: "customHeader",
        headerAlign: "center",
        renderCell: (params) => {
          return (
            <Grid container justifyContent="center" alignItems="center">
              {params.value}
            </Grid>
          );
        },
      },
      {
        field: "action",
        headerName: "Action",
        width: windowWidth < 1800 ? 150 : 220,
        headerClassName: "customHeader",
        headerAlign: "center",
        renderCell: (params) => {
          return (
            <Grid container justifyContent="center" alignItems="center">
              <Link to={"/product/" + params.row.id}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row.id)}
                fontSize="3rem"
              />
            </Grid>
          );
        },
      },
    ];



  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        sx={{ height: windowWidth < 1800 ? 650 : 870, width: "100%" }}
      />
    </div>
  );
}
