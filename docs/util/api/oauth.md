# Goal

-   Use Google/Facebook/Twitter account to log into other services

# Specs

-   OpenID Connect
-   OAuth2
-   JWT
-   SAML

# Articles

-   (Authorization and Authentication For Everyone)[https://dev.to/kimmaida/authorization-and-authentication-for-everyone-27j3]

# General

-   Digital identity refers to a set of attributes that define an individual user in the context of a function delivered by a particular application.
-   authentication refers to the process of verifying that a user is who they say they are.
-   When accessing 3rd party resource, sharing credentials is bad.
    -   The app that asks for the credentials doesn't have much stake in taking care of the credentials
    -   Tha app's privileges are too many.

# OAuth Flow

-   In the OAuth flow, your app needs to send two requests to Google. The first request is to get an authorization code, the second is to get an access token.

# Authorization Code

-   The authorization code is a code that Google sends back to your app once the user consents on this screen.
-   Only valid for one-time use, since its only usage is to exchange it for an access token
-   Expires very quickly (according to this article, the OAuth protocol's recommended maximum is 10 minutes, and many services' authorization codes expire even earlier)

# Access Token

-   Can be obtained using the authorization code
-   Put in the headers of any API requests to Google on behalf of the user
-   Expires after one hour (the expiration time may vary if you're using something besides Google)

# Refresh Token

# OpenID Connect standards

# OAuth 2.0

-   Open Authorization
-   a process through which an application or website can access private user data from another website. This other website usually works only as a trusted identity provider. It gives the requesting app some basic information about you so that the app can create a profile. This way, you don’t have to fill in a boring sign-up form and deal with yet another password
-   OAuth 2.0 is an open standard for performing delegated authorization. It's a specification that tells us how to grant third party access to APIs without exposing credentials.
-   OAuth 2.0 is an Authorization framework, designed specifically where a user of a service can allow a third-party application to get limited access to his/her data hosted in the service without revealing his/her username & password credentials to the third-party application.
