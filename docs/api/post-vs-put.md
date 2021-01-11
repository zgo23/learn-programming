POST means "create new" as in "Here is the input for creating a user, create it for me".

PUT means "insert, replace if already exists" as in "Here is the data for user 5".

You POST to example.com/users since you don't know the URL of the user yet, you want the server to create it.

You PUT to example.com/users/id since you want to replace/create a specific user.

POSTing twice with the same data means create two identical users with different ids. PUTing twice with the same data creates the user the first and updates him to the same state the second time (no changes). Since you end up with the same state after a PUT no matter how many times you perform it, it is said to be "equally potent" every time - idempotent. This is useful for automatically retrying requests. No more 'are you sure you want to resend' when you push the back button on the browser.

A general advice is to use POST when you need the server to be in control of URL generation of your resources. Use PUT otherwise. Prefer PUT over POST.
