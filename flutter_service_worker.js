'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7381f698967fdfba3cea243a45e85afd",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "e7f312a4efea4c07bdbe785340fa8756",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "ccc89567c763f520ea06451acc34b154",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "bcdb121b48c166c5d22e1468320a62f2",
".git/objects/66/3c48f24d76474e31314f7fb365ad4a1d74146b": "2e5713fd89609b0e4ce2efb258b05473",
".git/objects/66/bedb24d0b80d71aa8cba8df2a0953468651e77": "dc1f0f3cb53cdeb104054b716f5be7c8",
".git/objects/66/e3416d22020957dfa37661c24007cb793490ce": "b9e6ca73e18e456346a05acc22a9617e",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "4643131532bd21681468718600b3fdcf",
".git/objects/68/6ff3be0cd6c3cdc070188e9c23f187283b7155": "2afff2ea51e1f4d8e83a5a17d9427d6b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/32/fa82e49a69d785b8b72ab4b429d9b9566ba82c": "7059a4d02d5e51fc77ebf745bd68fdef",
".git/objects/51/2b727dab9272931a312657f394c55d01bacf28": "e43fda3be38f3caa1d0c8d7e9e4946bc",
".git/objects/3d/17fb7f2a1472c65312a087052727c1d8011d77": "1862afc51ec1cee1917b68d09acd07cb",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "c7fb3f722452c753bddba014dd8ff868",
".git/objects/a3/d0b8420c88522519853d61f25bc401d5fdd5bb": "a579322dba45c34a33eed6f0f23a1260",
".git/objects/bb/ea90c361e2d2eeb4b3ea7f0bf6ae59ce30f31f": "caec4115b56ecb9d40a218fd1e8b43d9",
".git/objects/d0/3b0a3992de44cbcb39f49ef5ae18e6f604d388": "7bfe165a278cb0fe33427241655d256f",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/b3/e04e24af75f6d94e74e4fc73251c48bf9700ce": "3b25673fbf1be27c8c577af62d44463e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/a5/4b2c32d4709c0d06804aa1ef9fe78315dcf9fa": "2ca54097d2e8485254db41866ab631c9",
".git/objects/d6/9853631cda13b78f70961a56c78a8bea15ebd6": "60f021641173c4ddb84158f5047bb3e1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ae/cf67dbb5999790e4294a9b64a52e7b2c8d4224": "19e5c3d703b091c15cd1463e43a0c506",
".git/objects/e2/e71046a4d2d00a400e7fc114e41e75142e3ef8": "ad2f2253335e37ea2bc5dcfdb11afe86",
".git/objects/e2/8ec3bdec86262c4032388b833dc31007d53224": "e3985bf1b78096f7e6b47464f76296fb",
".git/objects/f3/f643a0f921a4e1203f14577b61fc00f89ede30": "246c2a03f5172549fae1ee30334a7013",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/fd/f599ee6facc8339361ea9dd88075730c8fdf99": "5198506effccfaf58ab074a22cb421fd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/b16f21ba46eae3d767179b2efe0a862c4eea28": "fd28aad178b2e1e2ee93acea5de7ed85",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "bd87a7cf5ea05252e5a8b745c0877738",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "d592583bcdeaba6e83d542f0b4d5d734",
".git/objects/fe/8c66deb93975d170c60ce44e7e2e0e3b04816d": "f3d435dd28a00dee2c83833c624a97f8",
".git/objects/27/099722ce493d1627b6d5bf06378500678ad967": "e745bb22c221b9034ebd32d07effd0be",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "c071319a7242e951039ba343446845d0",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "aa349e87e38ecb9e74631648723c84ec",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/74/202a450626ca79e651d4d1b7f35cfb5ab9647c": "68164267caebd0e46c6736758c1c1fd2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/19/329dc448d6021f84b9ea33439e65615ea703a5": "b1549f8c59cf9057daa44e11da0a6da6",
".git/objects/72/ec0689e005505e5768044204385a2c04ba8e08": "a772b1a263237a1662bc42f581e07ca9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/2a/823ce485d5066d6cdad0dedc1fce5ad48276e9": "7b77321f22471f2c9120d34da7812a99",
".git/objects/2f/0928f09e2d4c43e8f69cfdeedd77cdc501af2d": "12f65d24310dbeb61bf6bf7f98bf32cc",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "0bc19006a42d012c63c8b1207e68a80c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/5c/eae1df775a13d0c10581734e483172844c7ec9": "339a8da82124434a89e20c80168f250c",
".git/objects/5d/30c18138e393b1566cfefe13ed8283f0988950": "a2562b4220c56e5ccbad3afdf88d5765",
".git/objects/65/7c62f7a1cf09e2a218d994ab8708139bcc46cc": "fd4165e0fca7571b6f45caed9fd3bcb5",
".git/objects/96/dd732db0627afeb8ec1685d18ac7db531c2baa": "d4633194bdc086ba8b5946aaa24cae59",
".git/objects/3a/7159e248ed5624b278ddda9872043e88dea0ca": "7c5704a3a66ad4df62e1a14350ed72d9",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/3f/8c9fe31517f2b57fd535d05c5b78845f962457": "377e1e44388046ac69715ca6e17a6adc",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/39/d89ed49be995935c4c82b79c0e7a629f586f17": "b65a35645e29b3ea0c4d4138f7899d93",
".git/objects/99/4783cd57de76954a685ad8290f2dcc8ef0d010": "eab9505c0ff0d7b34b9012ef03016d18",
".git/objects/52/c9f9afd275d16fbebf9afc19c4c8b5e1092784": "9c9876f06cd52ce2c66937e6d55c2d28",
".git/objects/55/f66e918abe015de70b17a1d70bae903d816484": "b4a104c4c34dcadd042fa97874271de6",
".git/objects/0f/13a769693ca578bedc11cf97cc73561a967767": "8ab0832b204891c68d9fcf038a8d3158",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/90/6369dda49eab6d0f7e2855da9baeb792a36360": "8ceb74ae56fa7b62939edf86e9e2fa12",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/a0/df0126a78e87bc105e93109134b9f7530d943e": "73c839803eff5d90bd766bd7b8d0b382",
".git/objects/a7/046d1d193b693dc89d902caafa8f9e3489e965": "9e53ec7c83ee4bb1066f436c9aad80a8",
".git/objects/a7/0c942267b8bb88ec089561ec4b0fc5eaa95d12": "84f5087dc4981c6b0ac4632f751b284c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/dd/e885f535e7cba33c1d2fbbe71ae7274062c235": "cca521db056189396e57638da0027247",
".git/objects/dc/db25fee90db5f9040dd9ba48f8ba67048b9c27": "58c790ad18a86acccf1d8d2024dd01d4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/de/0cc59ec5f8e3df469b03900fc70e5ca329a0d4": "1cf5413d0b47e905865cac83d8736571",
".git/objects/a6/030283c7c328f8619950aa162fc0634084217d": "2baef89c1b7ef8a8a3a22ee4f0c7bd8c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/c3/c2762942abd1bcb9e3e94cfab71f52939c7ae2": "45e32a8a8882866ffbbbcf14eb187c25",
".git/objects/ea/619019de2c879c80de25533028d55e2906fbd1": "228a9553dea5a29e9d47f1b64f622cb6",
".git/objects/cc/71118b49886f4fe82bb02e7bc397c57e79a7fd": "ca9cdb2f2abc627e4f782f6b75f37029",
".git/objects/e6/78b6694dd0f17eba27313454a9a1538f0cdbaf": "a5d99433c606eaf606a08d9fa4cbfbc8",
".git/objects/ff/f5a3cd338d1907f3d33d73a60d81cee7966d68": "0c89f97b5954431a66a3d294ca88df44",
".git/objects/ff/e0a652a8764e42f6058b4a89934bb4eeb9c5ca": "712ea755a062040d1b0b2ee865a5b9bf",
".git/objects/cb/190e1b65f2a259d288610262024be8876d2dd1": "01fc984ba62c72e4003d389de7c90771",
".git/objects/2c/e3acb540f8025fe3545ee45209a60a488df84c": "43e0f6ce688a1f5918dcf3364296f3b3",
".git/objects/77/96c926148d718a5e211d466ab79a00ae6e9602": "74423f76e60298aca39364960fee621e",
".git/objects/84/79d2154986c9942194a0a92982159d5d27e168": "4ecaa2df29118236576dd97da7cf34cc",
".git/objects/84/ffb33617813fcc575dbdd63cbcb9cb7e68dd00": "94ddf4cf18c371fed0fa361be57e8f18",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/4a/15126d7b1f305d97c3b6e8352413b2c3bf2477": "4822e92b084b78e82eba6f34472f5ace",
".git/objects/4f/feb8d4673c2296e620605bd1410b8b24a03fd9": "7ce2b1f6dbb75b52e98b1fce1b4791e1",
".git/objects/12/5ea4a84f54af2d0d92693a9af4d204574b2577": "362fa46d788cc37a860a58377eec2f4b",
".git/objects/8c/b26e3f26ebe106180ef57da63e7f241eab0cae": "bada1ce71ce195a5cc566fdeefadd3d6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/76/42078b515f2a226344fc1ad958d25cf9b2a13f": "5a5d423dd5389dc940ec7c9b8b3b6041",
".git/objects/76/8734ad6fdaae0ad1c82cedbc6c571fcf1a6397": "c0917579773d1b3544e71d9f3ddd0040",
".git/objects/49/3e7274eda4a1fe0aec9c85cee7b9cc303f2341": "2dbe5467bce338250bdaf5fee81607a7",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "b8d6f15ef784ef37473a3264834abc7d",
".git/objects/2b/8ff23c8f044a66b382f90f7f4cf292bf1ec15a": "e5cb83d4de6f63c8d4701b68374fba1b",
".git/objects/78/4654d48339db735ef0a19ad6497194c69ffd72": "abc14197b2726e89fe714e96a49d43bf",
".git/objects/8e/1f17966d4f4b7589d2ed3a675ab4a9374d68e7": "e36aaa51b56765cd3e55831191cc8204",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "060658e097c712f6bedc0362951f5deb",
".git/logs/refs/heads/main": "d36e8a17cb7b07c83eeee67284a366ce",
".git/logs/refs/remotes/origin/main": "4215161018a04acd1307ab93e095d6d9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ef2166518f0fc0f8c6414ce10b2401dc",
".git/refs/remotes/origin/main": "ef2166518f0fc0f8c6414ce10b2401dc",
".git/index": "5515afd4c15c07ab7964f2fb8301de57",
".git/COMMIT_EDITMSG": "8620a3786e0a493c00e03c1c2b7624af",
"assets/AssetManifest.json": "52542e86de52295f657800af665125f5",
"assets/NOTICES": "451ee13b0b5e4ad8449eb3736a85655e",
"assets/FontManifest.json": "04474dae60944a72c654291ed94331c0",
"assets/AssetManifest.bin.json": "0518849416d469b1688dfb6477491e1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "06f13caec294cc36f6cb5f0089f43c07",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b397154b238f9fbff7f9b55410399f4f",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "7b7e29353cabc1555d2720eb496b805e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "095e76eaa33569bd4f75f4d457be91f4",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/bootstrap.svg": "8c2689b779cee6d34f5bd5fc13201fee",
"assets/assets/images/portfolio1.jpg": "c09b9d68c4c976acfb3cf8d2ad60e7b3",
"assets/assets/images/figma.svg": "73b6c25b4f137b733856706274682263",
"assets/assets/images/mongo.svg": "b94156fc04986d83c49757e1916ed9cd",
"assets/assets/images/portfolio3.jpg": "cf1f5b3a0a32628e362a767c996e1a4c",
"assets/assets/images/express.svg": "ae071836159e37c188c7d35ee77c20aa",
"assets/assets/images/round-text.png": "422870f21573a521e1aeb823824a0367",
"assets/assets/images/firebase.svg": "93d4b8f8f52f33e93c074f8ef5e24722",
"assets/assets/images/postgres.svg": "43cee733eb9c35eec748b357ea058f50",
"assets/assets/images/portfolio5.jpg": "b28fe9c6c8aa53b0ef433013ffa7c900",
"assets/assets/images/tailwind.svg": "10832eda8e7d4c9121912d105ec40479",
"assets/assets/images/flutter.svg": "ed9ae2ef41760aff0a54ee11ee3cc657",
"assets/assets/images/ruby.svg": "0f88e3dff4393e212aa5f4f521889bdc",
"assets/assets/images/material.svg": "8cb464c2cc4de4dcc83806fe3d636b70",
"assets/assets/images/dart.svg": "423184deb153fa3d825f3b17d08225a1",
"assets/assets/images/sqlite.svg": "b87fea112f1021db8f28b849153951f5",
"assets/assets/images/css.svg": "71e475f3b26779f7b54eb12fed96fd6a",
"assets/assets/images/photoshop.svg": "c57d1468f8f2d0327e178c30dfb13e47",
"assets/assets/images/next.svg": "26045ef4fd5abfe4b31a32769719a69a",
"assets/assets/images/elementor.svg": "b99e3d4aded60f1329aca12fec9d7bcd",
"assets/assets/images/rails.svg": "825cac89ad3becaea767e1fb3ca783d2",
"assets/assets/images/illustrator.svg": "abd10dcf3cc7a7fa78bb039118d3afe0",
"assets/assets/images/react.svg": "3d4b0195ab97de7e34622d072975471e",
"assets/assets/images/html.svg": "9abc68ccd5f79d8271e97ee2db6d8aff",
"assets/assets/images/wordpress.svg": "5bd93601cddd132150a4407f7c2eafed",
"assets/assets/images/node.svg": "a583637bc82e4582a4d62fa2086bf517",
"assets/assets/images/profile-pic.png": "6567146b3a486b99c63a6014377951a5",
"assets/assets/fonts/InterDisplay-ExtraLight.otf": "b8f66d5ded4096f1c7db343e1b46d980",
"assets/assets/fonts/InterDisplay-SemiBold.otf": "a3ded704e3d96f4ae74c3579ddae9816",
"assets/assets/fonts/InterDisplay-Light.otf": "c135010596e1a490dd5848f8f2308502",
"assets/assets/fonts/InterDisplay-Thin.otf": "21f033bff98a9225f147ec4ddf67a78e",
"assets/assets/fonts/InterDisplay-Medium.otf": "526b8aeab9fe18c59228cc98cb685d48",
"assets/assets/fonts/InterDisplay-Bold.otf": "50573cc15d28a6da29160190854b0510",
"assets/assets/fonts/InterDisplay-Regular.otf": "2f6f2aece3ad2892fb05238fa398a044",
"assets/assets/fonts/InterDisplay-ExtraBold.otf": "75db64de0dd6b98df86281910a1cbe3f",
"assets/assets/fonts/InterDisplay-Black.otf": "d238eac3d113e02c785cfd5a0476af4a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
