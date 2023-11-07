import React, { useState, useEffect, useRef } from "react";
import { useSnackbar } from "notistack";
import Loader from "../components/Loader/Loader";
import { Suspense } from "react";
import Page404 from "../components/Page404/Page404";
import { HomePage } from "../Web-Pages";

const Home = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  if (props.error) {
    try {
      enqueueSnackbar(props.error, { variant: "error" });
    } catch (error) {}
    return <Page404 />;
  }
  return (
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
      <>
        <HomePage />
      </>
    </Suspense>
  );
};

export default Home;
