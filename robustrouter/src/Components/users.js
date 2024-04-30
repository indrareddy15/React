// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  //State management
  const [gitUsers, setGitUsers] = useState([]);

  const getGitUsers = () => {
    // const response = await axios.get("https://api.github.com/users?since=2000");
    const response = [
      {
        login: "countjocular",
        id: 2001,
        node_id: "MDQ6VXNlcjIwMDE=",
        avatar_url: "https://avatars.githubusercontent.com/u/2001?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/countjocular",
        html_url: "https://github.com/countjocular",
        followers_url: "https://api.github.com/users/countjocular/followers",
        following_url:
          "https://api.github.com/users/countjocular/following{/other_user}",
        gists_url: "https://api.github.com/users/countjocular/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/countjocular/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/countjocular/subscriptions",
        organizations_url: "https://api.github.com/users/countjocular/orgs",
        repos_url: "https://api.github.com/users/countjocular/repos",
        events_url:
          "https://api.github.com/users/countjocular/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/countjocular/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "funndude",
        id: 2002,
        node_id: "MDQ6VXNlcjIwMDI=",
        avatar_url: "https://avatars.githubusercontent.com/u/2002?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/funndude",
        html_url: "https://github.com/funndude",
        followers_url: "https://api.github.com/users/funndude/followers",
        following_url:
          "https://api.github.com/users/funndude/following{/other_user}",
        gists_url: "https://api.github.com/users/funndude/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/funndude/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/funndude/subscriptions",
        organizations_url: "https://api.github.com/users/funndude/orgs",
        repos_url: "https://api.github.com/users/funndude/repos",
        events_url: "https://api.github.com/users/funndude/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/funndude/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "alxx",
        id: 2003,
        node_id: "MDQ6VXNlcjIwMDM=",
        avatar_url: "https://avatars.githubusercontent.com/u/2003?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/alxx",
        html_url: "https://github.com/alxx",
        followers_url: "https://api.github.com/users/alxx/followers",
        following_url:
          "https://api.github.com/users/alxx/following{/other_user}",
        gists_url: "https://api.github.com/users/alxx/gists{/gist_id}",
        starred_url: "https://api.github.com/users/alxx/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/alxx/subscriptions",
        organizations_url: "https://api.github.com/users/alxx/orgs",
        repos_url: "https://api.github.com/users/alxx/repos",
        events_url: "https://api.github.com/users/alxx/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/alxx/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "zilvinas",
        id: 2004,
        node_id: "MDQ6VXNlcjIwMDQ=",
        avatar_url: "https://avatars.githubusercontent.com/u/2004?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/zilvinas",
        html_url: "https://github.com/zilvinas",
        followers_url: "https://api.github.com/users/zilvinas/followers",
        following_url:
          "https://api.github.com/users/zilvinas/following{/other_user}",
        gists_url: "https://api.github.com/users/zilvinas/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/zilvinas/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/zilvinas/subscriptions",
        organizations_url: "https://api.github.com/users/zilvinas/orgs",
        repos_url: "https://api.github.com/users/zilvinas/repos",
        events_url: "https://api.github.com/users/zilvinas/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/zilvinas/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "kbaird",
        id: 2005,
        node_id: "MDQ6VXNlcjIwMDU=",
        avatar_url: "https://avatars.githubusercontent.com/u/2005?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/kbaird",
        html_url: "https://github.com/kbaird",
        followers_url: "https://api.github.com/users/kbaird/followers",
        following_url:
          "https://api.github.com/users/kbaird/following{/other_user}",
        gists_url: "https://api.github.com/users/kbaird/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/kbaird/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/kbaird/subscriptions",
        organizations_url: "https://api.github.com/users/kbaird/orgs",
        repos_url: "https://api.github.com/users/kbaird/repos",
        events_url: "https://api.github.com/users/kbaird/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/kbaird/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "fel",
        id: 2006,
        node_id: "MDQ6VXNlcjIwMDY=",
        avatar_url: "https://avatars.githubusercontent.com/u/2006?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/fel",
        html_url: "https://github.com/fel",
        followers_url: "https://api.github.com/users/fel/followers",
        following_url:
          "https://api.github.com/users/fel/following{/other_user}",
        gists_url: "https://api.github.com/users/fel/gists{/gist_id}",
        starred_url: "https://api.github.com/users/fel/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/fel/subscriptions",
        organizations_url: "https://api.github.com/users/fel/orgs",
        repos_url: "https://api.github.com/users/fel/repos",
        events_url: "https://api.github.com/users/fel/events{/privacy}",
        received_events_url: "https://api.github.com/users/fel/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "michel",
        id: 2007,
        node_id: "MDQ6VXNlcjIwMDc=",
        avatar_url: "https://avatars.githubusercontent.com/u/2007?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/michel",
        html_url: "https://github.com/michel",
        followers_url: "https://api.github.com/users/michel/followers",
        following_url:
          "https://api.github.com/users/michel/following{/other_user}",
        gists_url: "https://api.github.com/users/michel/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/michel/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/michel/subscriptions",
        organizations_url: "https://api.github.com/users/michel/orgs",
        repos_url: "https://api.github.com/users/michel/repos",
        events_url: "https://api.github.com/users/michel/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/michel/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "peter",
        id: 2008,
        node_id: "MDQ6VXNlcjIwMDg=",
        avatar_url: "https://avatars.githubusercontent.com/u/2008?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/peter",
        html_url: "https://github.com/peter",
        followers_url: "https://api.github.com/users/peter/followers",
        following_url:
          "https://api.github.com/users/peter/following{/other_user}",
        gists_url: "https://api.github.com/users/peter/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/peter/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/peter/subscriptions",
        organizations_url: "https://api.github.com/users/peter/orgs",
        repos_url: "https://api.github.com/users/peter/repos",
        events_url: "https://api.github.com/users/peter/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/peter/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "magagnon",
        id: 2009,
        node_id: "MDQ6VXNlcjIwMDk=",
        avatar_url: "https://avatars.githubusercontent.com/u/2009?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/magagnon",
        html_url: "https://github.com/magagnon",
        followers_url: "https://api.github.com/users/magagnon/followers",
        following_url:
          "https://api.github.com/users/magagnon/following{/other_user}",
        gists_url: "https://api.github.com/users/magagnon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/magagnon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/magagnon/subscriptions",
        organizations_url: "https://api.github.com/users/magagnon/orgs",
        repos_url: "https://api.github.com/users/magagnon/repos",
        events_url: "https://api.github.com/users/magagnon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/magagnon/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "colinsurprenant",
        id: 2010,
        node_id: "MDQ6VXNlcjIwMTA=",
        avatar_url: "https://avatars.githubusercontent.com/u/2010?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/colinsurprenant",
        html_url: "https://github.com/colinsurprenant",
        followers_url: "https://api.github.com/users/colinsurprenant/followers",
        following_url:
          "https://api.github.com/users/colinsurprenant/following{/other_user}",
        gists_url:
          "https://api.github.com/users/colinsurprenant/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/colinsurprenant/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/colinsurprenant/subscriptions",
        organizations_url: "https://api.github.com/users/colinsurprenant/orgs",
        repos_url: "https://api.github.com/users/colinsurprenant/repos",
        events_url:
          "https://api.github.com/users/colinsurprenant/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/colinsurprenant/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "Pawka",
        id: 2011,
        node_id: "MDQ6VXNlcjIwMTE=",
        avatar_url: "https://avatars.githubusercontent.com/u/2011?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Pawka",
        html_url: "https://github.com/Pawka",
        followers_url: "https://api.github.com/users/Pawka/followers",
        following_url:
          "https://api.github.com/users/Pawka/following{/other_user}",
        gists_url: "https://api.github.com/users/Pawka/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Pawka/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/Pawka/subscriptions",
        organizations_url: "https://api.github.com/users/Pawka/orgs",
        repos_url: "https://api.github.com/users/Pawka/repos",
        events_url: "https://api.github.com/users/Pawka/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Pawka/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "Atilla",
        id: 2012,
        node_id: "MDQ6VXNlcjIwMTI=",
        avatar_url: "https://avatars.githubusercontent.com/u/2012?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Atilla",
        html_url: "https://github.com/Atilla",
        followers_url: "https://api.github.com/users/Atilla/followers",
        following_url:
          "https://api.github.com/users/Atilla/following{/other_user}",
        gists_url: "https://api.github.com/users/Atilla/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Atilla/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/Atilla/subscriptions",
        organizations_url: "https://api.github.com/users/Atilla/orgs",
        repos_url: "https://api.github.com/users/Atilla/repos",
        events_url: "https://api.github.com/users/Atilla/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Atilla/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "jeffsmith",
        id: 2013,
        node_id: "MDQ6VXNlcjIwMTM=",
        avatar_url: "https://avatars.githubusercontent.com/u/2013?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jeffsmith",
        html_url: "https://github.com/jeffsmith",
        followers_url: "https://api.github.com/users/jeffsmith/followers",
        following_url:
          "https://api.github.com/users/jeffsmith/following{/other_user}",
        gists_url: "https://api.github.com/users/jeffsmith/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/jeffsmith/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/jeffsmith/subscriptions",
        organizations_url: "https://api.github.com/users/jeffsmith/orgs",
        repos_url: "https://api.github.com/users/jeffsmith/repos",
        events_url: "https://api.github.com/users/jeffsmith/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jeffsmith/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "lee",
        id: 2014,
        node_id: "MDQ6VXNlcjIwMTQ=",
        avatar_url: "https://avatars.githubusercontent.com/u/2014?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lee",
        html_url: "https://github.com/lee",
        followers_url: "https://api.github.com/users/lee/followers",
        following_url:
          "https://api.github.com/users/lee/following{/other_user}",
        gists_url: "https://api.github.com/users/lee/gists{/gist_id}",
        starred_url: "https://api.github.com/users/lee/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lee/subscriptions",
        organizations_url: "https://api.github.com/users/lee/orgs",
        repos_url: "https://api.github.com/users/lee/repos",
        events_url: "https://api.github.com/users/lee/events{/privacy}",
        received_events_url: "https://api.github.com/users/lee/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "sroske",
        id: 2015,
        node_id: "MDQ6VXNlcjIwMTU=",
        avatar_url: "https://avatars.githubusercontent.com/u/2015?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/sroske",
        html_url: "https://github.com/sroske",
        followers_url: "https://api.github.com/users/sroske/followers",
        following_url:
          "https://api.github.com/users/sroske/following{/other_user}",
        gists_url: "https://api.github.com/users/sroske/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/sroske/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/sroske/subscriptions",
        organizations_url: "https://api.github.com/users/sroske/orgs",
        repos_url: "https://api.github.com/users/sroske/repos",
        events_url: "https://api.github.com/users/sroske/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/sroske/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "tammersaleh",
        id: 2016,
        node_id: "MDQ6VXNlcjIwMTY=",
        avatar_url: "https://avatars.githubusercontent.com/u/2016?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/tammersaleh",
        html_url: "https://github.com/tammersaleh",
        followers_url: "https://api.github.com/users/tammersaleh/followers",
        following_url:
          "https://api.github.com/users/tammersaleh/following{/other_user}",
        gists_url: "https://api.github.com/users/tammersaleh/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/tammersaleh/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/tammersaleh/subscriptions",
        organizations_url: "https://api.github.com/users/tammersaleh/orgs",
        repos_url: "https://api.github.com/users/tammersaleh/repos",
        events_url: "https://api.github.com/users/tammersaleh/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/tammersaleh/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "brianculler",
        id: 2017,
        node_id: "MDQ6VXNlcjIwMTc=",
        avatar_url: "https://avatars.githubusercontent.com/u/2017?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/brianculler",
        html_url: "https://github.com/brianculler",
        followers_url: "https://api.github.com/users/brianculler/followers",
        following_url:
          "https://api.github.com/users/brianculler/following{/other_user}",
        gists_url: "https://api.github.com/users/brianculler/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/brianculler/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/brianculler/subscriptions",
        organizations_url: "https://api.github.com/users/brianculler/orgs",
        repos_url: "https://api.github.com/users/brianculler/repos",
        events_url: "https://api.github.com/users/brianculler/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/brianculler/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "szhao",
        id: 2018,
        node_id: "MDQ6VXNlcjIwMTg=",
        avatar_url: "https://avatars.githubusercontent.com/u/2018?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/szhao",
        html_url: "https://github.com/szhao",
        followers_url: "https://api.github.com/users/szhao/followers",
        following_url:
          "https://api.github.com/users/szhao/following{/other_user}",
        gists_url: "https://api.github.com/users/szhao/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/szhao/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/szhao/subscriptions",
        organizations_url: "https://api.github.com/users/szhao/orgs",
        repos_url: "https://api.github.com/users/szhao/repos",
        events_url: "https://api.github.com/users/szhao/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/szhao/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "bricolage",
        id: 2019,
        node_id: "MDQ6VXNlcjIwMTk=",
        avatar_url: "https://avatars.githubusercontent.com/u/2019?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/bricolage",
        html_url: "https://github.com/bricolage",
        followers_url: "https://api.github.com/users/bricolage/followers",
        following_url:
          "https://api.github.com/users/bricolage/following{/other_user}",
        gists_url: "https://api.github.com/users/bricolage/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/bricolage/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/bricolage/subscriptions",
        organizations_url: "https://api.github.com/users/bricolage/orgs",
        repos_url: "https://api.github.com/users/bricolage/repos",
        events_url: "https://api.github.com/users/bricolage/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/bricolage/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "dastels",
        id: 2020,
        node_id: "MDQ6VXNlcjIwMjA=",
        avatar_url: "https://avatars.githubusercontent.com/u/2020?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/dastels",
        html_url: "https://github.com/dastels",
        followers_url: "https://api.github.com/users/dastels/followers",
        following_url:
          "https://api.github.com/users/dastels/following{/other_user}",
        gists_url: "https://api.github.com/users/dastels/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/dastels/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/dastels/subscriptions",
        organizations_url: "https://api.github.com/users/dastels/orgs",
        repos_url: "https://api.github.com/users/dastels/repos",
        events_url: "https://api.github.com/users/dastels/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/dastels/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "siebertm",
        id: 2021,
        node_id: "MDQ6VXNlcjIwMjE=",
        avatar_url: "https://avatars.githubusercontent.com/u/2021?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/siebertm",
        html_url: "https://github.com/siebertm",
        followers_url: "https://api.github.com/users/siebertm/followers",
        following_url:
          "https://api.github.com/users/siebertm/following{/other_user}",
        gists_url: "https://api.github.com/users/siebertm/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/siebertm/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/siebertm/subscriptions",
        organizations_url: "https://api.github.com/users/siebertm/orgs",
        repos_url: "https://api.github.com/users/siebertm/repos",
        events_url: "https://api.github.com/users/siebertm/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/siebertm/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "jclarke",
        id: 2022,
        node_id: "MDQ6VXNlcjIwMjI=",
        avatar_url: "https://avatars.githubusercontent.com/u/2022?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jclarke",
        html_url: "https://github.com/jclarke",
        followers_url: "https://api.github.com/users/jclarke/followers",
        following_url:
          "https://api.github.com/users/jclarke/following{/other_user}",
        gists_url: "https://api.github.com/users/jclarke/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/jclarke/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/jclarke/subscriptions",
        organizations_url: "https://api.github.com/users/jclarke/orgs",
        repos_url: "https://api.github.com/users/jclarke/repos",
        events_url: "https://api.github.com/users/jclarke/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jclarke/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "bantic",
        id: 2023,
        node_id: "MDQ6VXNlcjIwMjM=",
        avatar_url: "https://avatars.githubusercontent.com/u/2023?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/bantic",
        html_url: "https://github.com/bantic",
        followers_url: "https://api.github.com/users/bantic/followers",
        following_url:
          "https://api.github.com/users/bantic/following{/other_user}",
        gists_url: "https://api.github.com/users/bantic/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/bantic/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/bantic/subscriptions",
        organizations_url: "https://api.github.com/users/bantic/orgs",
        repos_url: "https://api.github.com/users/bantic/repos",
        events_url: "https://api.github.com/users/bantic/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/bantic/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "jsa",
        id: 2024,
        node_id: "MDQ6VXNlcjIwMjQ=",
        avatar_url: "https://avatars.githubusercontent.com/u/2024?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jsa",
        html_url: "https://github.com/jsa",
        followers_url: "https://api.github.com/users/jsa/followers",
        following_url:
          "https://api.github.com/users/jsa/following{/other_user}",
        gists_url: "https://api.github.com/users/jsa/gists{/gist_id}",
        starred_url: "https://api.github.com/users/jsa/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/jsa/subscriptions",
        organizations_url: "https://api.github.com/users/jsa/orgs",
        repos_url: "https://api.github.com/users/jsa/repos",
        events_url: "https://api.github.com/users/jsa/events{/privacy}",
        received_events_url: "https://api.github.com/users/jsa/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "jonpierce",
        id: 2025,
        node_id: "MDQ6VXNlcjIwMjU=",
        avatar_url: "https://avatars.githubusercontent.com/u/2025?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jonpierce",
        html_url: "https://github.com/jonpierce",
        followers_url: "https://api.github.com/users/jonpierce/followers",
        following_url:
          "https://api.github.com/users/jonpierce/following{/other_user}",
        gists_url: "https://api.github.com/users/jonpierce/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/jonpierce/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/jonpierce/subscriptions",
        organizations_url: "https://api.github.com/users/jonpierce/orgs",
        repos_url: "https://api.github.com/users/jonpierce/repos",
        events_url: "https://api.github.com/users/jonpierce/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jonpierce/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "gregnewman",
        id: 2026,
        node_id: "MDQ6VXNlcjIwMjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/2026?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/gregnewman",
        html_url: "https://github.com/gregnewman",
        followers_url: "https://api.github.com/users/gregnewman/followers",
        following_url:
          "https://api.github.com/users/gregnewman/following{/other_user}",
        gists_url: "https://api.github.com/users/gregnewman/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/gregnewman/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/gregnewman/subscriptions",
        organizations_url: "https://api.github.com/users/gregnewman/orgs",
        repos_url: "https://api.github.com/users/gregnewman/repos",
        events_url: "https://api.github.com/users/gregnewman/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/gregnewman/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "zeenix",
        id: 2027,
        node_id: "MDQ6VXNlcjIwMjc=",
        avatar_url: "https://avatars.githubusercontent.com/u/2027?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/zeenix",
        html_url: "https://github.com/zeenix",
        followers_url: "https://api.github.com/users/zeenix/followers",
        following_url:
          "https://api.github.com/users/zeenix/following{/other_user}",
        gists_url: "https://api.github.com/users/zeenix/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/zeenix/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/zeenix/subscriptions",
        organizations_url: "https://api.github.com/users/zeenix/orgs",
        repos_url: "https://api.github.com/users/zeenix/repos",
        events_url: "https://api.github.com/users/zeenix/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/zeenix/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "lstep",
        id: 2028,
        node_id: "MDQ6VXNlcjIwMjg=",
        avatar_url: "https://avatars.githubusercontent.com/u/2028?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lstep",
        html_url: "https://github.com/lstep",
        followers_url: "https://api.github.com/users/lstep/followers",
        following_url:
          "https://api.github.com/users/lstep/following{/other_user}",
        gists_url: "https://api.github.com/users/lstep/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lstep/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/lstep/subscriptions",
        organizations_url: "https://api.github.com/users/lstep/orgs",
        repos_url: "https://api.github.com/users/lstep/repos",
        events_url: "https://api.github.com/users/lstep/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lstep/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "garethr",
        id: 2029,
        node_id: "MDQ6VXNlcjIwMjk=",
        avatar_url: "https://avatars.githubusercontent.com/u/2029?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/garethr",
        html_url: "https://github.com/garethr",
        followers_url: "https://api.github.com/users/garethr/followers",
        following_url:
          "https://api.github.com/users/garethr/following{/other_user}",
        gists_url: "https://api.github.com/users/garethr/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/garethr/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/garethr/subscriptions",
        organizations_url: "https://api.github.com/users/garethr/orgs",
        repos_url: "https://api.github.com/users/garethr/repos",
        events_url: "https://api.github.com/users/garethr/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/garethr/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "ruphy",
        id: 2030,
        node_id: "MDQ6VXNlcjIwMzA=",
        avatar_url: "https://avatars.githubusercontent.com/u/2030?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/ruphy",
        html_url: "https://github.com/ruphy",
        followers_url: "https://api.github.com/users/ruphy/followers",
        following_url:
          "https://api.github.com/users/ruphy/following{/other_user}",
        gists_url: "https://api.github.com/users/ruphy/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/ruphy/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/ruphy/subscriptions",
        organizations_url: "https://api.github.com/users/ruphy/orgs",
        repos_url: "https://api.github.com/users/ruphy/repos",
        events_url: "https://api.github.com/users/ruphy/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/ruphy/received_events",
        type: "User",
        site_admin: false,
      },
    ];
    // console.log(response.data);
    setGitUsers(response);
    // return response.data;
  };

  useEffect(() => {
    getGitUsers();
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="users-cont">
        {gitUsers.map((user) => (
          <div className="user-card-cont" key={user.id}>
            <img
              src={user.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{user.login}</span>
            <button
              onClick={() => navigate(`/users/user/${user.login}`)}
              className="view-btn"
            >
              View User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
