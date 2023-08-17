import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { DeleteOutline } from "@mui/icons-material";
import Grid from "@mui/material/Grid";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);


  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: windowWidth < 1800 ? 50 : 100,
      cellClassName: "userListId",
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
      field: "user",
      headerName: "User",
      width: windowWidth < 1800 ? 250 : 300,
      headerClassName: "customHeader",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Grid container justifyContent="center" alignItems="center">
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.username}
            </div>
          </Grid>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: windowWidth < 1800 ? 250 : 300,
      cellClassName: "userListEmail",
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
      cellClassName: "userListStatus",
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
      field: "transaction",
      headerName: "Transaction Volume",
      width: windowWidth < 1800 ? 250 : 300,
      cellClassName: "userListTransaction",
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
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
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
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        sx={{ height: windowWidth < 1800 ? 650 :870, width: "100%" }}
      />
    </div>
  );
}
