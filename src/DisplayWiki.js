import React,{useEffect, useState} from "react";
import style from './module.Displaywiki.css'

function DisplayWiki({id,node_id, avatar_url, url, html_url,followers_url, following_url}){

return(
  <div className="container-2">
  <p> Api is : https://api.github.com/users/wikiwi</p>
  <p> Login :{id}</p>
  <p>   Node id   : {node_id}</p>
  <img alt="avatar_url" src={avatar_url}/>
  <a href={url}> URL </a>
  <a href={html_url}> HTML url</a>
  <a href={followers_url}> Followers url</a>
  </div>
)
}

export default DisplayWiki;
