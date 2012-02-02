# LoremImages

LoremImages is a jQuery plugin for populating your content with random images.
Images are loaded from <a href="http://lorempixel.com">LoremPixel</a> service and licensed under the
<a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike</a> license.

## Usage

```js
$("#container").loremImages( width, height [, options ] );
```

### Arguments

**width** Width of all images `[int]`

**height** Height of all images `[int]`

**options** Optional plugin options `[obj]`. Options list:

+ `count` `[int]` number of images that should be loaded, default is `10`
+ `grey` `[bool]` whether to load only black & white images, default is `false`
+ `randomWidth` `[int]` random range for width value, default is `0`
+ `randomHeight` `[int]` random range for width value, default is `0`
+ `category` `[string]` specify images category, defaul is all categories. can be: `abstract, animals, city, food, nightlife, fashion, people, nature, sports, technics, transport`
+ `itemBuilder` `[function]` function that returns HTML for one item. function arguments are: `index, url, imgWidth, imgHeight`. default output is `<img src="[url]" alt="Lorempixel">`

###### randomWidth & randomHeight options

With these two options you can randomize sizes of final images. For example, if `width` is **100**
and `options.randomWidth` is **200**, it will generate images from **100** to **300** pixels wide.

## Examples

### Call with all options

```js
$("ul.images").loremImages( 100, 200, { // images base size 100 x 200 pixels
    count:        20,        // load 20 images
    grey:         1,         // load grey / black & white images
    randomWidth:  100,       // width will be in 100-200 range
    randomHeight: 100,       // height will be in 200-300 range
    category:     'fashion', // get images from fashion category
    itemBuilder:  function( index, url, width, height ){ // custom HTML output for UL container
        // `this` is jQuery wrapped container element
        return '<li><img src="'+url+'" width="'+width+'" height="'+height+'" alt="Image '+(i+1)+'"></li>';
    }
});
```


