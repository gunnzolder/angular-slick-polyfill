# angular-slick-polyfill
Use [angular-slick](https://github.com/vasyabigi/angular-slick) directive without angular

### Usage:

- Add `jquery`, `slick-carousel` and `angular-slick-polyfill` to your code:

```html
<link rel="stylesheet" href="bower_components/slick-carousel/slick/slick.css">
<link rel="stylesheet" href="bower_components/slick-carousel/slick/slick-theme.css">
<script src="path/to/jquery/jquery.js"></script>
<script src="path/to/slick-carousel/slick/slick.js"></script>
<script src="path/to/angular-slick-polyfill/angular-slick-polyfill.js"></script>
```

- Add a `slick` element to your html:

```html
<slick>
  ...
</slick>

<slick infinite=true slides-to-show=3 slides-to-scroll=3>
  ...
</slick>

<slick dots=true infinite=false speed=300 slides-to-show=5 touch-move=false slides-to-scroll=1>
  ...
</slick>
```

- If you wanna read about possible settings, go [here](http://kenwheeler.github.io/slick/#settings).

That's it!
