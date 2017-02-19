# fitvideos
fitVideos.js is a simple light weight `JavaScript` that allow you to make embedded videos adopt to the screen width, I faced this problem while I try to avoid overflowing embedded videos

# How to use it?
Copy the embedded videos and do not remove or change the default height & width values because it use those to calculate the right height & width while resizing

# Sample youtube embedding html
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/rrT6v5sOwJg" frameborder="0" allowfullscreen></iframe>
```

# Initializing the script
```
<script src="fitVideos.js"></script>
<script>
	fitVideos.init();
</script>
```
