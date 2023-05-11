'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "282b0a346d8e0ae2e5c1f6a6846f829d",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"index.html": "18f92ffa3e12647ad914baedf6bead6e",
"/": "18f92ffa3e12647ad914baedf6bead6e",
"main.dart.js": "68e97156d7e94180a257e95fe23ffbd4",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/index": "a005d590a4367853f13a55b21bee7224",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/a7f0a1d4a7470345d685c995eb312e8e35716b": "22df330d1063fabd2f3f199c3a90b513",
".git/objects/37/aee2fb4cc25c953d956a69dd903e53d1651c9c": "c3ace9f16b083538fe84653036f9902a",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/ee/46f519c710ae223d0cc2f836b433d5e9c51f6d": "5f2aac1dd67f0eac1d69b0ec83adf9cf",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/aa/2561094e8e8bafcf02a3869bc66789a49e3b76": "d98cafe3a80bbe83ae4b23c906efd47c",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/2e/6117f76dd052cccc0dfe437ef25f9e587f8101": "ab5504df4d25f5af763c78252e8ae186",
".git/objects/d2/25a4af0ea86f054575b496dfdff2b365117fe1": "7776916473376695b972de16b2f2434f",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/40/773f2cc92f86e2c76380f1dd04293e298b69ed": "df03ef94f2d0670df81a4244f09cc72d",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/e5/c67fe58105e566dc510f8d874a0a47f0b4b4ca": "7dfa38661c577c5107def638ef85f95e",
".git/objects/28/2a1d8103a482e761ca7ab0acfbd577217428c2": "6835319976d24d462cc5e29a2c0d539c",
".git/objects/f7/dcd4dfc027d25be2c88caaa19380d86cc29493": "315478654ae4eb3d12365051eb15e4d8",
".git/objects/49/94618abb1a2cd14058eceddc49753c0e68fce1": "28578a00b42b2ab46a7dd92068da4800",
".git/objects/74/70032bf5f5c45795cbaf31be6a4d7e951f3984": "68c5c7a26aaeac6477824dacb724d369",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/6a/01984dd34e78640bf6b4643a653f85b81f73e4": "f9366531ef39463b741336190c19bbfa",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/a3/124bce8a716386c16c0f0f20e3c28fbb7592d9": "eb444ba0ce5f6b1a4f0bdb7849d8256a",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/54/97537c1bbd99780e6b686d480ece4d49dbb1c7": "752aea106b32a0d045cef5ae539d66a8",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/ec/4536f899053ecf81396f4c577cf59795303ab3": "607578dbfb7dd8e8e6e6c87ad9677d3b",
".git/objects/00/2e2591fc41b9251aaaaa22d19bfa97f557f570": "5589dcbda3f0312fc3e85f72d365c089",
".git/objects/0a/ecfc5fd67f16ff1ec7b7bf3637df085e87a436": "fd603d3e5c49e7e24d8680e5ea6b3ba9",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/87/f6799fdda879f29b581907ff8db8ef24c459ac": "eec373fa39c8a869bc7d2d3e0cd1c7b1",
".git/objects/f4/078835e9e3fa205840a2baa50560a291a62e13": "951132737604c9dbe712b09dd175b9c5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/cf/c9ac71d1925bb5a99a884267ab2c251fc446f1": "8276c054e55e31dfb8b0f9049681a698",
".git/objects/cf/442d2cd40aac2ef0bd076cc4d29ddb2f9582ef": "ba8b5fe2af76b8f82d462498d17f025e",
".git/objects/14/3863383c1ed2ba9cea3d80c2bfd12e6c0ba441": "4a0c49ff5cc9daaf107bf0e8258d4d0d",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/e6/5682960e37fa757539a49eeb4a70e52afe2fc1": "f7dbe21e279a9c32b06011d873d1b6ee",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/4011a0093a579651da7dea386af24003aaf7ee": "f9505229b123300ce9799efaffcd10ac",
".git/objects/e4/1a26b9bf580d047c72f44bd6ed686d9def012e": "f088d1a0c98a4d83347e201d7de85a92",
".git/objects/2b/a4155543b760b71891de594f34c6e769870e5f": "46723fbd266ec016743cf0c7e54ebc4e",
".git/objects/24/8eaf33ba3dcf2128fc35ac21a9102a3716a3e0": "d65f17365be046bf6b5586d8f78cce92",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/52/9d706cbcb6034137e281276694c9038351f474": "f6437bb9b9324e7ab56c71870e55e122",
".git/objects/3c/6ac628e57ed52b5f074efc9ca60b4186b4faa5": "2b47e0461fd07139d092e98747928feb",
".git/objects/3c/7540fd97d20d6e4b026cc00a3dd7dac6321570": "974521a1f18c00a9145bc41d5b2e262e",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/7c/a007ed5595b3f5e44be2ce2c70ab42eda6eaca": "91f94654532d175060279a52059249ec",
".git/objects/7c/b8b61df51dc506393c61ca450b81da244a1339": "205d49806a67af8f7d9dc7ab33ae7438",
".git/objects/c3/34d7e26284018be33414683fb7a5f868608e3e": "ee5ba407fd7676b4281b7325557ee590",
".git/objects/38/8d4bb0a607bea7debbc8692df904b30c9ab53f": "a02301b44b2166a88b0cf5330dcfb90d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/COMMIT_EDITMSG": "e7967483a3a0d3aee194afeecaf0fc0e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/main": "7c892082bf68886f94e2d4e1d77e0f10",
".git/refs/heads/main": "7c892082bf68886f94e2d4e1d77e0f10",
".git/logs/HEAD": "0dbdfbfa7bc095e14bfc37b389b06c08",
".git/logs/refs/remotes/origin/main": "666280cd1fb75f25acbd47677abcea84",
".git/logs/refs/heads/main": "f03032fef269e493d399a47923147591",
".git/config": "67adf2342531b7220b6ddbf9025c4397",
"assets/AssetManifest.bin": "a6451c61a133950f6070166a1e3948bf",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/FontManifest.json": "06438dbc68e4dc4c7665d2e03e14e76d",
"assets/AssetManifest.json": "183c6882211bd7760ebf1ff3cbfcd847",
"assets/assets/fonts/OFL.txt": "e542a680112942b035ac18d476288952",
"assets/assets/fonts/Exo-Bold.ttf": "a939d1d0769c88bde068c8570e5f3f22",
"assets/assets/fonts/Exo-Medium.ttf": "822a35349a144a97433b82d94df61d1a",
"assets/assets/images/mg-base.png": "deba0329701a59c12f8904235539de19",
"assets/assets/images/particle-wave.png": "d6b73c1346b8ffd48de351cfab3daaad",
"assets/assets/images/bg-base.jpg": "3c258b33e7a71dee7ae8e3c4e83dd04f",
"assets/assets/images/mg-light-receive.png": "6e0e1018b6cf20f4747f5c4ef3e6f58d",
"assets/assets/images/button-start.png": "748701e42abc14ebc65963234d9a7b6a",
"assets/assets/images/button-start-hover.png": "39d7ee03962ad766b66be34336343e75",
"assets/assets/images/mg-light-emit.png": "076ed5490a67d7d300832d86778adfc0",
"assets/assets/images/fg-light-receive.png": "9981f29fa2d3814768cbf9695eb7b861",
"assets/assets/images/fg-base.png": "9742f524c248f9795e59132bda584982",
"assets/assets/images/select-left.png": "b3fbaf9a7b1b72c26880c5bdfde6e33c",
"assets/assets/images/bg-light-receive.png": "2f6ba99f8eea020027e10b9778b666ad",
"assets/assets/images/fg-light-emit.png": "d398c8fab13becd0da8995be2a3c7799",
"assets/assets/images/select-right.png": "a6c979b3eae49cde6c7d5797dc357034",
"assets/assets/shaders/orb_shader.frag": "7f53dc1f64cf4ef8e12c5171dcd7efc5",
"assets/assets/shaders/ui_glitch.frag": "97b58db3bd4a0fd72623cc29af45f190",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/NOTICES": "3b997f8ca0833bdb9abc30a695c53b04",
"version.json": "38306938d0d66cb91149cd340bd22c3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
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
