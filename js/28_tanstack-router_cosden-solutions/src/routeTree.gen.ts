/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as PostsIndexImport } from './routes/posts/index'
import { Route as PostsIdImport } from './routes/posts/$id'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  id: '/posts/',
  path: '/posts/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIdRoute = PostsIdImport.update({
  id: '/posts/$id',
  path: '/posts/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/posts/$id': {
      id: '/posts/$id'
      path: '/posts/$id'
      fullPath: '/posts/$id'
      preLoaderRoute: typeof PostsIdImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      id: '/posts/'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutLazyRoute
  '/posts/$id': typeof PostsIdRoute
  '/posts': typeof PostsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutLazyRoute
  '/posts/$id': typeof PostsIdRoute
  '/posts': typeof PostsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutLazyRoute
  '/posts/$id': typeof PostsIdRoute
  '/posts/': typeof PostsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/posts/$id' | '/posts'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/posts/$id' | '/posts'
  id: '__root__' | '/' | '/about' | '/posts/$id' | '/posts/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutLazyRoute: typeof AboutLazyRoute
  PostsIdRoute: typeof PostsIdRoute
  PostsIndexRoute: typeof PostsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutLazyRoute: AboutLazyRoute,
  PostsIdRoute: PostsIdRoute,
  PostsIndexRoute: PostsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/posts/$id",
        "/posts/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/posts/$id": {
      "filePath": "posts/$id.tsx"
    },
    "/posts/": {
      "filePath": "posts/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
