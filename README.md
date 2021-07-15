# Awesome Albums

Awesome Albums is a takehome project that was completed for a job interview. Names and descriptions of the original prompts have been changed.

View the latest deployment at https://ann-codes.github.io/takehome-awesome-albums/.

## Tasks

- Build a project using JavaScript, TypeScript, and React
- Utilizes the itunes feed `https://itunes.apple.com/us/rss/topalbums/limit=100/json`
  - Show the top 100 albums
  - Allow the albums to be searchable
- Have a clean/modern and responsive design
  - Utilize a CSS framework
  - Have a good user experience
- Create an additional feature (anything you prefer)
- Write tests for the application
- Organize and design the application as if it was going into production

---

## My Additional Feature

I created an `Artist Page` that utilized an additional iTunes endpoint that I found that users could click into from the top 100 albums list. `https://itunes.apple.com/lookup?id=563578808&entity=album`

There were a few problems I had to solve. 
1. The provided top 100 albums endpoint did not provide the Artist ID. But rather, it was included in the artist URL only. This information had to be extracted from the URL in order to use the other endpoint. 
   ```json
   "im:artist": {
        "label": "Jam & Lewis",
        "attributes": {
            "href": "https://music.apple.com/us/artist/jam-lewis/563578808?uo=2"
        }
    }
   ```
2. The endpoint had a cors issue `Access to XMLHttpRequest at 'https://itunes.apple.com/lookup?id=563578808&entity=album' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.` Since these headers were set on iTunes' end, we can take the following steps to resolve it
   - Ask iTunes to change their headers /laughs
   - The user would need to unblock CORS on their browser (see the [Unblock CORS Chrome plugin](https://add0n.com/access-control.html))
   - Or the developer could use a 3rd party application that creates a proxy to add CORS headers to the proxy request.  
     - Many thanks to [AbleLincoln](https://github.com/AbleLincoln/cors-escape) to providing the proxy.


---

## Takehome Post Mortem

- The project was expected to take 3-4 hours. 
- IMO, it was a big ask to design and create an application with a novel feature, style it, and test it in the expected time frame. 
- I further complicated things for myself by using Typescript in this project, as this is the first time I created a React project w/ TS from scratch outside of a classroom or course setting. There were definitely bumps in the road as I abandoned a few tools (like `reqct-query`) as I was not able to get it working with types and felt that it would have taken too much additional time.  
- I completed it in about 5-6 hours guestimate, split between 2 days (Sunday/Monday)
- The styling is a bit more simplistic than I liked, as I was also using [Bulma](https://bulma.io/) and [PureCSS](https://purecss.io/) for the first time as well and had to make liberal use of their documentation. 
- I did not have time to write tests for the application, which would probably have taken an additional hour or more. 
- I pretty certain it would have gone a lot smoother and quicker had I just completed the project in JS and React. 

See the [Interview_Submission](https://github.com/ann-codes/takehome-awesome-albums/tree/Interview_Submission) branch for the files as they were submitted for the interview. 

---

## Post Interview Changes

To Dos: 
- ✅  Deploy to GH Pages 
- ✅  Clean up CSS, text 
- ✅  Fix css to remove color change hover for non-links
- ⬜  Abstract the structure to a more typical TS folder structure 
- ⬜  Artist Page feature - add in the featured album in the Artist page
- ⬜  Search feature - add in ability to sort by artist name, album name, genre
- ⬜  Load spinner - add in a loading spinner animation while data is being loaded
- ⬜  Write tests for the app

---

## Deploying to GH Pages
- `npm run deploy`