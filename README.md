# Example application using Github API

<p align="center"><b>Online demo at <a href="https://git-repo-ktphuc1994.vercel.app/" target="_blank">https://git-repo-ktphuc1994.vercel.app/</a></b></p>

---

## Description

This example create a site to fetch my [`repository list`](https://github.com/ktphuc1994?tab=repositories) on Github. There is also a feature to search the repositories, a login page and private route.

## Framework and library

NextJS
MUI (Material UI)
TailwindCSS
Axios
SWR

## Running the app

```bash
# development
$ npm run dev
```

## Login

```bash
# Available login accounts:
$ email: 'khucthienphuc@gmail.com', password: 'ktphuc1994',
$ email: 'iamuser@gmail.com', password: 'iamuser'
$ email: 'test@gmail.com', password: 'test123'
```

When login successfully, redirect to "/". Authenticated Token will be stored on Local Storage.

If user has already logged in, the page will show an Already Login Page, by using the same mechanic as stated in Private Route. If user exist, then show Already Login page. If not, show Login page.

## Logout

<p align="center">
  <img src="https://i.imgur.com/MrvMdJj.jpg" width="100" alt="Nest Logo" />
</p>
<p align="center">Click on the username at the top right for logout button to appear. Then logging out.</p>

```bash
# Logout mechanic
$ Authenticated Token is removed from Local Storage. mutateUser from SWR is called, user data is set to undefined. SWR will try to revalidate user data. Private Route will kick in.
```

## Private Route

<p>Private Route is trigger by fetching user information at Header/HeaderUser component, using useUser hook. If the fetching failed with code 403 (Unathorized) or 404 (Not found), Authenticated Token at Local Storage (if any) will be removed, client will be pushed to "/login" page.</p>
<p>Private Route covers very route that is wrapped inside Layout, which means Route("/", "/repo-detail")</p>

## RepoContext

<p>RepoContext wraps the whole app. Provide 2 states to store repository details and etag (from Github API)</p>

## Reduce request to Github API with Etag

<p>Etag will be added to Header of Requests sending to Github server. If Etag matchs with previous one, server will response with status code 304. Client will then stop fetching and use previous cached data for rendering.</p>
<p>Etag is store in a state at RepoContext. So if user refresh the page (cache data cleared), Etag will also be cleared and client can fetch data again.</p>

## Homepage (My Repositories)

<p>Fetching Repository List from Github using AXIOS and SWR. Then filtering the List by searchName state, and render.</p>
<p>projectNameRef is attached to search input. On Search Button click: setSearchName to the value of projectNameRef => Rererdering</p>
<p>On Each Repository Click: using setRepo context from RepoContext to update repository detail state. Then directing client to "/repo-detail" </p>

## Repository Detail

<p>Using repository detail state (repo) to render content. If no repo exist, render EmptyRepo page.</p>
