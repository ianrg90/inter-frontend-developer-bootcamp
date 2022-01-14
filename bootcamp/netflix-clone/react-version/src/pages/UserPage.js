import React, {Fragment}  from "react"
import Header from "../components/layout/Header"
import Main from "../components/layout/Main"
import MoviesList from "../components/layout/MoviesList"

function UserPage (){
    return (
        <Fragment>
            <Header/>
            <Main/>
            <MoviesList/>
        </Fragment>
    )
}

export default UserPage