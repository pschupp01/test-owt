# Boat app architecture

Besides a few configuration files at the root of this project, the main code is contained is the `src` folder.
I'll explain in detail here the role of each folder, and a few files.

### index.tsx
Our main file, it will mount react in our DOM root div and will render our HOC Providers.

### routers
Contains our router code.
This part will choose which component to display depending on the URL.

### app
Our pages files which is constructed to respect our routes architecture in a Next.js style.
For example for the route `/boats/:id` the corresponding page is in app/boats/[id]/index.tsx

### entities
Contains the interface of our api entities that will be manipulated at different places in our code

### queries
All the needed queries to the REST api

### themes
Styling configuration

### components
Our different React components


