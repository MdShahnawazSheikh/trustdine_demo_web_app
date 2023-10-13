'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d9baf0300da02b82a36a9ffc80df8689",
"assets/AssetManifest.json": "590084b94bd3b6d0de7e21aae1e9619d",
"assets/assets/font/AutourOne-Regular.ttf": "de1b19d9df2763ef7e7ebdd0f4769c5d",
"assets/assets/icons/back.svg": "017d74eb9568057d15651ff2221f61de",
"assets/assets/icons/camera.svg": "7df8f1a8f4093f0a9c35010867595eaa",
"assets/assets/icons/card.svg": "d0685597b16ec048e1d6e9583905768d",
"assets/assets/icons/cart.svg": "62765576e891e6f08611c245e690f29a",
"assets/assets/icons/clock.svg": "9a565e4875b8a9caddfee74b7e23d1e7",
"assets/assets/icons/close.svg": "2202ce4bbeee7214a19d1e94deb26977",
"assets/assets/icons/delivery.svg": "e90fd958d410cde7f16b9b91f7b2aa1f",
"assets/assets/icons/document.svg": "b952cf7d22fb67a5c728dce6db01b8aa",
"assets/assets/icons/done.svg": "c31fb8e84178a7a396fcfd5c32f7516b",
"assets/assets/icons/facebook.svg": "8f2f6bec8489880b161b3ea83a7ef450",
"assets/assets/icons/fast-delivery.svg": "28a81a0d709812f94832ccdf3d1ea77c",
"assets/assets/icons/fb.svg": "1832b9fb9239dfcd727cbda7b21348f2",
"assets/assets/icons/fire.svg": "912bae8ec4cf82821bd5f046142d6911",
"assets/assets/icons/food.svg": "132cbc19e4f3374f4b3a3bd2eb582dda",
"assets/assets/icons/forward.svg": "f9c107053af5ecdb57cabda6a06d9b2c",
"assets/assets/icons/google.svg": "09aea0f59807f6f4f66af7f5719cba9e",
"assets/assets/icons/home.svg": "a7e76c32d48960853373b956b890badc",
"assets/assets/icons/invisible.svg": "317332eb44c38e51e88fc1aebdf76182",
"assets/assets/icons/location.svg": "b9ae812b40b691d223f41aef82fff4dd",
"assets/assets/icons/lock.svg": "456422aad9fff8b81ba0fc07a5a49761",
"assets/assets/icons/logout.svg": "1c8015b72433b26fcb479503dec9dfb2",
"assets/assets/icons/marker.svg": "5e25930e71d11928c709175ef3726b12",
"assets/assets/icons/minus.svg": "8e28e165ecb98df7d1f49790b46fffd8",
"assets/assets/icons/non_veg.svg": "3f27b54814a43e59997e0718faa2ba95",
"assets/assets/icons/notify.svg": "fc5f025d3d68087e981f14ee04377316",
"assets/assets/icons/order.svg": "359ff181492524bc9c783c427200b903",
"assets/assets/icons/phone.svg": "d18dc880f675eeea558bd758f0dc8e5d",
"assets/assets/icons/plus.svg": "322729c6dfb5d96117d92cddaa66a54f",
"assets/assets/icons/profile.svg": "c6537da2829422d0fb470a1fd75fa826",
"assets/assets/icons/rating.svg": "fe483b4c3c937acb9791d83b0cd7ff90",
"assets/assets/icons/recomended.svg": "2aec27c5105802a41bcf53c2929eb042",
"assets/assets/icons/search.svg": "8314e36878fde12b279628bab7768a62",
"assets/assets/icons/share.svg": "8b80f6ea1d8fe945b7985f4ca42bbdbe",
"assets/assets/icons/veg.svg": "ea375424853459d5a02f97712f71b39a",
"assets/assets/icons/visible.svg": "16fdd42bbfdd2622357424333fd5d6a7",
"assets/assets/illustrations/connection_lost.svg": "b9e40ade66345e36f969b0e1c1069fcf",
"assets/assets/illustrations/empty.svg": "802dbe234e7bc0596b7eee4d9daa8b47",
"assets/assets/illustrations/Illustrations_1.svg": "fd1fe56da29dc38149ef379679dddebf",
"assets/assets/illustrations/Illustrations_2.svg": "1b0977210bd07d2595f0612958c9fa33",
"assets/assets/illustrations/Illustrations_3.svg": "2f3d0557ab9b67549b944b556a63b24b",
"assets/assets/illustrations/lost_connection.gif": "cdbb3e968a0c9976636f6fcf6173215d",
"assets/assets/images/Banner.png": "457e6aa702d6bc011b09025db9a1e4ce",
"assets/assets/images/Banner_2.png": "ef0b01e116da1fc309b8599f2414ae6a",
"assets/assets/images/big_1.png": "e367821300188d370b544d8cb4731660",
"assets/assets/images/big_2.png": "a01e1ca605e3683da32fcd5a917901eb",
"assets/assets/images/big_3.png": "e80fa7fe1b522c75adf79d265ab36cd2",
"assets/assets/images/big_4.png": "bcffe4b8694d454e57d7f86cb4c28f9e",
"assets/assets/images/featured%2520_items_1.png": "caf670c44d4f8f1ebac8115ed86b0a36",
"assets/assets/images/featured%2520_items_2.png": "f2c8382f470e458bff86fd83a5755f35",
"assets/assets/images/featured%2520_items_3.png": "a8bf5a1b883f376ec3c8b8c8a6899656",
"assets/assets/images/Header-image.png": "001f259a60296b9f740412524e454380",
"assets/assets/images/image_error.png": "ac2e00cdc5039d82f6bb9d35314ee127",
"assets/assets/images/medium_1.png": "f96d69b8627e29fcd10be1e4b0c4832e",
"assets/assets/images/medium_2.png": "382124ea5afa24239564d3d879504e5c",
"assets/assets/images/medium_3.png": "3d1b4e3323c378c30a4321a8847916cf",
"assets/assets/images/medium_4.png": "098e1e3c45ec0294e116b91ceb26678a",
"assets/assets/images/pizza_1.jpg": "843ead0ce0b1b9a6960a7888856dd9a5",
"assets/assets/images/pizza_2.jpg": "4397b704736438e9da7ae06108966297",
"assets/assets/images/pizza_3.jpg": "25a6ac830674e6e0e3f212f5c8a77ec7",
"assets/assets/images/pizza_4.jpg": "0abc215f249a854ffea116b9a4c3dd9d",
"assets/assets/images/pizza_5.jpg": "d4c899a8f0fbc0de04ec766362698d1c",
"assets/assets/images/pizza_6.jpg": "fe553a3edae7ca9b697d0c76b12fadd4",
"assets/assets/images/pizza_7.jpg": "f15478aeb6406d648fb981bcc2ba5bc1",
"assets/assets/trustdine_logo.png": "ba0c88aab3ca1eff0e93bd764552daaf",
"assets/FontManifest.json": "ad7e3a220ffddefe4114513af9b28553",
"assets/fonts/MaterialIcons-Regular.otf": "8bacb4c2bbf3aa1a280bacefbd99bc2e",
"assets/NOTICES": "cd6c8fc61a4d12ecfbc84e205785970b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f827a2d6b848ef27bd8d1129a9cdaa43",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f2afeda65e362c1ae70f12851b51ed8a",
"/": "f2afeda65e362c1ae70f12851b51ed8a",
"main.dart.js": "341b5c5b7b6990c38502b6f58cd95159",
"manifest.json": "5265beb159d0f0040d7ba464bdb40699",
"version.json": "0c85f03e16bc1ef76fcbca6f287cd74f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
