// Define options for each category and subcategory
const gameData = {
    "YOU": {
        "Food": [
            { name : "Bacon", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2019/11/Bacon-rashers-in-a-pan-72c07f4.jpg?resize=700%2C366" },
            { name : "Pizza", imageUrl: "https://media.istockphoto.com/id/496546118/photo/slice-of-fresh-italian-classic-original-pepperoni-pizza-isolated.jpg?s=612x612&w=0&k=20&c=7aYapAwoe4fO5jRiNMIFiflIztcBAA8s-GLqAmBiSgA=" },
            { name : "Burgers", imageUrl: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=" },
            { name : "Pastaroni", imageUrl: "https://target.scene7.com/is/image/Target/GUEST_5246ce80-e869-41fb-9f1a-9f55e122677d?wid=488&hei=488&fmt=pjpeg" },
            { name : "Cesar Salad", imageUrl: "https://www.jocooks.com/wp-content/uploads/2020/07/caesar-salad-1-12.jpg" },
            { name : "Tacos", imageUrl: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg" },
            { name : "BBQ", imageUrl: "https://img.texasmonthly.com/2024/03/austin-bbq-guide-1.jpg?auto=compress&crop=faces&fit=fit&fm=pjpg&ixlib=php-3.3.1&q=45" },
            { name : "Steak", imageUrl: "https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg" },
            { name : "Fried Rice", imageUrl: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75" },
            { name : "Chicken Tenders", imageUrl: "https://www.barleyandsage.com/wp-content/uploads/2022/03/buttermilk-chicken-tenders-1200x1200-1.jpg" },
            { name : "Pizza Rolls", imageUrl: "https://midwestfoodieblog.com/wp-content/uploads/2022/06/FINAL-pizza-rolls-3-1-1200x1800.jpg" },
            { name : "Enchiladas", imageUrl: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F08-2023-turkey-enchiladas%2Fturkey-enchiladas-151-vertical" },
        ],
        "Drinks": [
            { name: "Wine", imageUrl: "https://t3.ftcdn.net/jpg/02/70/04/00/360_F_270040033_G5PQPgMwbQmyQlP5tHDCTEWWcSTBxCb3.jpg" },
            { name: "Water", imageUrl: "https://t4.ftcdn.net/jpg/00/53/68/57/360_F_53685741_ouWoGf8qqzeH6oeW2dgPqsNmr5Z3TSL7.jpg" },
            { name: "Beer", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUv1ZTUxUykrMdzx3yy16SaF4GUfGL9pqSw&s" },
            { name: "Pre-workout", imageUrl: "https://i5.walmartimages.com/seo/ProSupps-Hyde-Nightmare-Intense-Energy-Pre-Workout-Dietary-Supplement-Jawbreaker-14-07-oz_e90c6623-bba0-4f5f-9393-27323b5d99fb.3d0843424c6dbf5fe23606e8538b6f62.jpeg" },
            { name: "Chocolate Milk", imageUrl: "https://t4.ftcdn.net/jpg/02/18/19/73/360_F_218197364_fvicCfpC3b6u9MP2uUzE7sOoNsZj9M5e.jpg" },
            { name: "Apple Juice", imageUrl: "https://nutritionfacts.org/app/uploads/2019/01/pexels-photo-1536868.jpeg" },
            { name: "Root Beer", imageUrl: "https://www.shutterstock.com/image-photo/irvine-california-12-aug-2023-260nw-2346478025.jpg" },
            { name: "Dr. Pepper", imageUrl: "https://images.pexels.com/photos/13599790/pexels-photo-13599790.jpeg?cs=srgb&dl=pexels-luke-landon-314916084-13599790.jpg&fm=jpg" },
            { name: "Coke", imageUrl: "https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg" },
            { name: "Smoothie", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rx_B538Kj9ou8OiNkytWaap1SNHjhRJ_1w&s" },
            { name: "Orange Juice", imageUrl: "https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?cs=srgb&dl=pexels-pixabay-158053.jpg&fm=jpg" },
            { name: "DOUBLE TEQUILA SOUR", imageUrl: "https://www.oliversmarket.com/wp-content/uploads/2023/06/Tequila-Sour-Pic.jpg" },
        ],
        "Beers": [
            { name : "IPA", imageUrl: "https://storage.googleapis.com/images-bks-prd-1385851.bks.prd.v8.commerce.mi9cloud.com/product-images/detail/40a0d0d4-6fa4-44ab-94d9-7652bd5a9c5c.jpeg" },
            { name : "Miller Lite", imageUrl: "https://131279680.cdn6.editmysite.com/uploads/1/3/1/2/131279680/2ZA2SNSRJ7NO2JKJTMX6KMW6.jpeg" },
            { name : "Michelob Ultra", imageUrl: "https://pics.walgreens.com/prodimg/508486/900.jpg" },
            { name : "Yuengling Lite", imageUrl: "https://static.specsonline.com/wp-content/uploads/2021/08/008992423050.jpg" },
            { name : "Yuengling Lager", imageUrl: "https://assets.yuengling.com/wp-content/uploads/2017/03/10180407/17_Yueng_Lager_NRDraft_Bottle_w-1-480x800.jpg" },
            { name : "Blue Moon", imageUrl: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/jvfukyhm/5845844f-58de-441e-9935-f4f216f8d967.jpeg" },
            { name : "Bluewing", imageUrl: "https://static.wixstatic.com/media/ea2455_14cb89a82d5647f3b4b089baeb119dd3~mv2.jpeg/v1/fill/w_640,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea2455_14cb89a82d5647f3b4b089baeb119dd3~mv2.jpeg" },
            { name : "Boulevard Wheat", imageUrl: "https://www.binnys.com/globalassets/catalogs/binnys/81/8172/81723/81723.jpg" },
            { name : "Dos Equis", imageUrl: "https://i5.walmartimages.com/asr/e8338de7-6c2e-4e25-a9b3-f75a897fff43.4a06df0739e82872309580c1c8c75e10.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
            { name : "Corona", imageUrl: "https://images.pexels.com/photos/15901846/pexels-photo-15901846/free-photo-of-cold-corona-beer.jpeg" },
            { name : "Modelo", imageUrl: "https://i5.walmartimages.com/seo/Modelo-Especial-Mexican-Lager-Import-Beer-12-Pack-12-fl-oz-Glass-Bottles-4-4-ABV_4246f813-f806-4e19-8814-6a2074a440f3.38c3656fa278bb3dc29b5ba7ae149ba1.jpeg" },
            { name : "Pacifico", imageUrl: "https://beverages2u.com/wp-content/uploads/2021/03/IMG_6127.jpg" },
            { name : "Coors Lite", imageUrl: "https://i5.walmartimages.com/asr/e881564d-586b-4fae-824a-ca2729c367cd.e4108bf257833c7d9c9cbb98eb0c3f46.jpeg" },
        ],
        "Fast Food Spots": [
            { name : "McDonalds", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/McDonald%27s_logo.svg" },
            { name : "Taco Bell", imageUrl: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_527,q_75,w_649/v1/crm/morrobayca/15431_taco_bell_FoodandDrink_logo-copy_5c6cd34b-5056-a36a-0697e4ed8e61f180.jpg" },
            { name : "Subway", imageUrl: "https://images.squarespace-cdn.com/content/v1/5a623160bce17601857614f8/1560461179139-8O27BADMQKY8CWE671K4/sandwich_subway.jpeg" },
            { name : "Wendy's", imageUrl: "https://a.abcnews.com/images/Business/HT_new_wendys_logo1_fast_food_thg_130716_4x3_608.jpg" },
            { name : "Chick-fil-A", imageUrl: "https://as1.ftcdn.net/v2/jpg/05/92/69/02/1000_F_592690265_gROaH68pyfgHokFhZVh25qlWUkhP2nwy.jpg" },
            { name : "Zaxby's", imageUrl: "https://zaxbys.com/uploads/1600x902_Z1_4ceb2b0bb4_b32ac52a6a.jpeg" },
            { name : "Chipotle", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3T61Q8ySVytcVHJdppPI7njPNHlHzfQaKCw&s" },
            { name : "Panda Express", imageUrl: "https://images.squarespace-cdn.com/content/v1/610bfbb399281144cf25fcc4/1628189477919-V1EMJ97BOA6WB6RMDQRV/panda-express-400x264.jpeg" },
            { name : "Feltner Brothers", imageUrl: "https://tb-static.uber.com/prod/image-proc/processed_images/0f157d39fa46da9d1e6f97dc8074c7ca/783282f6131ef2258e5bcd87c46aa87e.jpeg" },
            { name : "Five Guys", imageUrl: "https://miro.medium.com/v2/resize:fit:1024/1*VDm9pvIrmP43q2zWOsMALg.jpeg" },
            { name : "In-N-Out", imageUrl: "https://nmgprod.s3.amazonaws.com/media/file/2d/11/9a4af3c0e713e51d53e553796be0/cover_image__a18vHEaM__AdobeStock_702965959_Editorial_U.jpeg.760x400_q85_crop_upscale.jpg" },
            { name : "Shake Shack", imageUrl: "https://cdn.vox-cdn.com/thumbor/rtmPpnqSH5aFqpiWQyKCTW4NA-I=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24797970/20211104_ShakeShack__AudreyMa_0243.jpg" },
            { name : "Culvers", imageUrl: "https://sharpsheets.io/wp-content/uploads/2022/12/intro-1560520860.jpeg.webp" },
        ],
        "Snacks": [
            { name : "Doritos", imageUrl: "https://i5.walmartimages.com/seo/Doritos-Tortilla-Chips-Nacho-Cheese-Flavored-Snack-Chips-2-75-oz-Bag_c6a6c39d-c8b5-4478-beba-35e7f14e8171.26c8df2fae95aeb86bc07a3c81489399.jpeg" },
            { name : "Oreos", imageUrl: "https://i5.walmartimages.com/asr/13a65eb2-2749-43fb-a5b9-51d53f6ab678.5e881f2d51959d2be66e4044d8d0227a.jpeg"},
            { name : "Nerds Gummy Cluster", imageUrl: "https://res.cloudinary.com/droneup-llc/image/fetch/f_auto/https://i5.walmartimages.com/asr/ae58b1a0-9865-42d6-af76-7ffd05ea43ee.82f34bb0d6735e0c2947cf3a0af7cb74.jpeg"},
            { name : "Cheeze Its", imageUrl: "https://i5.walmartimages.com/seo/Kellogg-s-Cheez-It-Crackers-Original-1-5oz-60ct_cfb07069-c092-4ac9-a21d-9a1f8631d8dd.bd4686da8febb98849d598d7474211d7.jpeg"},
            { name : "Granola Bars", imageUrl: "https://shop.sunbeltbakery.com/cdn/shop/files/Sunbelt_Bakery_Chocolate_Chip_GRAN_NP-1-202-32-TE_F.jpg?v=1705338600"},
            { name : "Animal Crackers", imageUrl: "https://i5.walmartimages.com/seo/Stauffer-s-Animal-Crackers-Original-24-oz_abcca89b-7e06-4ff6-a77f-ab6ca18930e1_1.644f62f7e712eba7ef548b71a1c5de5c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"},
            { name : "Wheat Thins", imageUrl: "https://i5.walmartimages.com/asr/1c060b47-df4e-4b13-a874-d13b0125bf19.f66361a152fa477262652c187170c1fe.jpeg"},
            { name : "Chips Ahoy", imageUrl: "https://i5.walmartimages.com/asr/83bffc6e-235a-44ff-8a2e-eed7233783ed.0ff93b34855a9ea53cdcda7ab1202ecc.jpeg"},
            { name : "Pop Tarts", imageUrl: "https://cdn.gardengrocer.com/attachments/photos/high_res/4446.jpg?2556"},
            { name : "Goldfish", imageUrl: "https://i5.walmartimages.com/seo/Pepperidge-Farm-Goldfish-Cheddar-Crackers-1-5-oz-Single-Serve-Snack-Pack_b79db1ec-b9f6-48f7-ad3f-cb7b3408a3c3.546a89c6c991fbdeb40dfe977e1e9385.jpeg"},
            { name : "Popcorn", imageUrl: "https://i5.walmartimages.com/seo/Skinnypop-Original-Popcorn-4-4-Oz_93fe2512-c750-44e0-803f-4c1af36c3b89.49a74716ebe36a6d60ed57924330948b.jpeg"},
            { name : "Pringles", imageUrl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/12/02/Pringles_New_Can_Design_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1606934642599.jpeg"},
            { name : "Peanut Butter Crackers", imageUrl: "https://images.kglobalservices.com/www.kellanovaus.com/en_us/product/kic-803/prod_img-1426713_austin_aug_14.jpeg"},
        ],
        "TV Shows": [
            { name : "Friends", imageUrl: "https://play-images-prod-ctf.tech.tvnz.co.nz/api/v1/web/image/3CLEzO37tocxCoSmzzcxwx/2733ae58689b3e59e477a86d2da48a36/friends-showtile.png.2733ae58689b3e59e477a86d2da48a36.jpg?width=1200&height=630"},
            { name : "Breaking Bad", imageUrl: "https://myhotposters.com/cdn/shop/products/mZ0039_1024x1024.jpeg?v=1571443953"},
            { name : "The Office", imageUrl: "https://www.usatoday.com/gcdn/presto/2020/03/23/USAT/c8d29efc-8433-4969-b675-e550ce3922b0-Ryan_then.jpeg"},
            { name : "Game of Thrones", imageUrl: "https://archive.org/download/gameofthrones_201911/Game_of_thrones.jpg"},
            { name : "Stranger Things", imageUrl: "https://akns-images.eonline.com/eol_images/Entire_Site/20201020/rs_634x1024-201120105818-634-stranger_things-netflix-gj.jpg?fit=around%7C776:1254&output-quality=90&crop=776:1254;center,top"},
            { name : "The Boys", imageUrl: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2022-10/The-Boys-Season-3.jpg?itok=47Z8uI5p"},
            { name : "The Bear", imageUrl: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/09/the-bear.jpeg"},
            { name : "House of the Dragon", imageUrl: "https://static.hbo.com/2024-05/house-of-the-dragon-s2-ka-1920.jpg"},
            { name : "Demon Slayer", imageUrl: "https://arhsharbinger.com/wp-content/uploads/2022/03/demon-slayer.jpeg"},
            { name : "Attack on Titan", imageUrl: "https://baylorlariat.com/wp-content/uploads/2022/04/attack-on-titan.jpeg"},
            { name : "Love Island", imageUrl: "https://admin.itsnicethat.com/images/7nd1VBlFdi_SifufpYPm3xP_Xs8=/150481/format-webp%7Cwidth-2880/5b60438d7fa44c44150001be.png"},
            { name : "Secret Lives of MW", imageUrl: "https://m.media-amazon.com/images/M/MV5BN2U0ZTIzOTItMjNmNS00ZjM5LTlhZGYtNmZmZjYxZmU5NjU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
            { name : "The Bachelor", imageUrl: "https://images.squarespace-cdn.com/content/v1/6277c0176055e5734adb6587/d544ef40-ba7b-484f-9784-2898675133b0/grazi.jpeg"},
        ],
        "Star Wars Characters": [
            { name : "Obi-Wan Kenobi", imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"},
            { name : "Padme", imageUrl: "https://preview.redd.it/do-you-think-padm%C3%A9-will-ever-make-a-return-to-the-star-wars-v0-21y1vznmbucd1.jpeg?auto=webp&s=dbdced195e81546241226626e57d606a3f6bc2c1"},
            { name : "C-3PO", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=233%2C0%2C716%2C536"},
            { name : "Chewbacca", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/chewie-main_e1968a8a.jpeg?region=27%2C0%2C535%2C536"},
            { name : "Darth Vader", imageUrl: "https://t4.ftcdn.net/jpg/03/13/36/79/360_F_313367965_7B8Y7JrJ3JAG6zdjw51L59kVQZMlA9K7.jpg"},
            { name : "Han Solo", imageUrl: "https://i.insider.com/529e230ceab8eaca7369ae60?width=800&format=jpeg&auto=webp"},
            { name : "Luke Skywalker", imageUrl: "https://preview.redd.it/first-look-at-mark-hamill-as-luke-skywalker-in-star-wars-v0-pcgdfo605nyc1.jpeg?auto=webp&s=44f9afa659f6ec94bdddc24b9aeffa4239dd74c5"},
            { name : "Princess Leia", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/db-leia-organa-5_48c24bd0.jpeg?region=0,0,1200,674"},
            { name : "Yoda", imageUrl: "https://st3.depositphotos.com/2591003/17487/i/450/depositphotos_174871074-stock-photo-berlin-germany-march-2017-master.jpg"},
            { name : "Jar Jar Binks", imageUrl: "https://preview.redd.it/when-cg-gives-us-jar-jar-binks-what-will-his-relic-item-be-v0-4fkhv21ad28c1.jpeg?auto=webp&s=d570559807ff17d2f644b6730d94221a3a525b6b"},
            { name : "Emperor Palpatine", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/emperor-palpatine_9a0e992d.jpeg?region=154%2C0%2C854%2C854"},
            { name : "Grand Moff Tarkin", imageUrl: "https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1612148212095-JDI2ZTQRQKUZ7EG8M4LT/Tarkin.jpg"},
            { name : "Greedo", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/databank_greedo_01_169_3e4b96ef.jpeg?region=195%2C0%2C1171%2C878"},
        ],
        "NFL WRs": [
            { name : "G. Wilson", imageUrl: "https://dims.apnews.com/dims4/default/0197637/2147483647/strip/true/crop/3000x2001+0+0/resize/599x400!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Fad43991e1baf4cb48eade91a0096ebcb%2F3000.jpeg"},
            { name : "T. Hill", imageUrl: "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2024-08/nba-plain--54ef7945-e3b0-48b5-b1d6-855d1dda7534.jpeg?itok=GOZqhRVW"},
            { name : "D. Adams", imageUrl: "https://preview.redd.it/davante-adams-is-getting-traded-soon-v0-x5x33u5jwzrd1.jpeg?auto=webp&s=847b5e7a7b28335b8083a5426f9442aee8b3e574"},
            { name : "C. Lamb", imageUrl: "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/06/USAT/72130272007-gty-1880887994.jpg"},
            { name : "D. London", imageUrl: "https://cdn.vox-cdn.com/thumbor/pPg4vjimNNeXzxk_mrwCurMQBMM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23997555/1242756632.jpg"},
            { name : "Z. Flowers", imageUrl: "https://cdn.vox-cdn.com/thumbor/R1KGxQD45QMNjVNS0smwtntQZO4=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25698506/usa_today_24482573.jpg"},
            { name : "J. Jerfferson", imageUrl: "https://media.gettyimages.com/id/1228753764/photo/minneapolis-minnesota-justin-jefferson-of-the-minnesota-vikings-celebrates-a-touchdown.jpg?s=612x612&w=gi&k=20&c=D9EPh92jvROvGWE3gq5XRx7KdfSLoE6AwbZURUL3-bU="},
            { name : "C. Kupp", imageUrl: "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_mobile/f_auto/rams/cjl04payrtnoavrfoa5x.jpg"},
            { name : "P. Nacua", imageUrl: "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/rams/uoy0nvtsb97dknjwrxtl"},
            { name : "M. Harrison Jr.", imageUrl: "https://cdn.arizonasports.com/arizonasports/wp-content/uploads/2024/10/marvin-harrison-jr-dolphins-cardinals-scaled.jpeg"},
            { name : "M. Nabers", imageUrl: "https://www.usatoday.com/gcdn/authoring/images/smg/2024/10/16/SMGW/75702710007-67-733344.jpeg?crop=2587,3448,x775,y0"},
            { name : "D. Hopkins", imageUrl: "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/g1vzik96gvifjmcyqh9l"},
            { name : "X. Worthy", imageUrl: "https://dknetwork.draftkings.com/wp-content/uploads/USATSI_24161433.jpg"},
        ],
        "NFL QBs": [
            { name : "K. Murray", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDDWWaUcOQW7kYccNJqXRVxqvyWyuLu7KDA&s"},
            { name : "J. Allen", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Josh_Allen_SEPT2021_%28cropped2%29.jpg"},
            { name : "J. Hurts", imageUrl: "https://cdn.vox-cdn.com/thumbor/amoRBOXes51EzYjPQtG4NNxnl94=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23035507/usa_today_17207529.jpg"},
            { name : "P. Mahomes", imageUrl: "https://static.clubs.nfl.com/image/private/t_new_photo_album/chiefs/bxysuxlzjazevvnixgfz.jpg"},
            { name : "A. Richardson", imageUrl: "https://cdn.vox-cdn.com/thumbor/5r2xZYTYbaDttT7jdlRScALsjBo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25676405/2178235975.jpg"},
            { name : "J. Burrow", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Joe_Burrow_Bengals.jpg"},
            { name : "L. Jackson", imageUrl: "https://static.www.nfl.com/image/upload/t_editorial_landscape_mobile/f_auto/league/uxdbfm6n5fm8qjcdd4u1.jpg"},
            { name : "B. Mayfield", imageUrl: "https://media.gettyimages.com/id/2167284084/photo/tampa-fl-baker-mayfield-of-the-tampa-bay-buccaneers-smiles-after-a-play-during-the-first.jpg?s=612x612&w=gi&k=20&c=rlnk0MPEXC1e0J6Bdfwm_i6g7Oyyr6u5IuiizrTsWCw="},
            { name : "B. Nix", imageUrl: "https://www.kget.com/wp-content/uploads/sites/2/2024/08/66c6547be66d78.85596206.jpeg?w=2560&h=1440&crop=1"},
            { name : "G. Smith", imageUrl: "https://static.www.nfl.com/image/upload/t_editorial_landscape_mobile/f_auto/league/uq2ggyfafgoc3muvsvyd.jpg"},
            { name : "A. Rodgers", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMo6-wDsEd_qExC3Ep0Gvo0wGoA6Jt8-ATkw&s"},
            { name : "J. Herbert", imageUrl: "https://static.clubs.nfl.com/image/private/t_person_squared_mobile/f_auto/chargers/c2kfwcip1pcgdaoigu03.jpg"},
            { name : "R. Wilson", imageUrl: "https://pbs.twimg.com/profile_images/1767162988635758592/VUypoAbK_400x400.jpg"},
        ],
        "Friends!": [
            { name : "Ryan", imageUrl: "https://i.imgur.com/i7XJR7a.jpeg"},
            { name : "Clayton", imageUrl: "https://i.imgur.com/wHQk7nU.jpeg"},
            { name : "Billy", imageUrl: "https://i.imgur.com/rfpFzOC.jpeg"},
            { name : "Glava", imageUrl: "https://i.imgur.com/ZBrpSso.jpeg"},
            { name : "Tim", imageUrl: "https://i.imgur.com/r0F1pAc.jpeg"},
            { name : "Ben", imageUrl: "https://i.imgur.com/XSLLp0U.jpeg"},
            { name : "Cole", imageUrl: "https://i.imgur.com/IROEPsZ.jpeg"},
            { name : "Will", imageUrl: "https://i.imgur.com/wvqI407.jpeg"},
            { name : "Gavin", imageUrl: "https://i.imgur.com/SyafdhB.jpeg"},
            { name : "Caden", imageUrl: "https://i.imgur.com/lfK0D8f.jpeg"},
            { name : "Blake", imageUrl: "https://i.imgur.com/tz5b6RS.jpeg"},
            { name : "Matthew", imageUrl: "https://i.imgur.com/Imtp1gZ.jpeg"},
            { name : "Drew", imageUrl: "https://i.imgur.com/gmp5XwO.jpeg"},
            { name : "Barnum", imageUrl: "https://i.imgur.com/Cf9oLV1.jpeg"},
        ],
        "Rappers": [
            { name : "Kendrick Lamar", imageUrl: "https://i.imgur.com/QcIm28X.jpeg"},
            { name : "Eminem", imageUrl: "https://i.imgur.com/hfcW3kr.jpeg"},
            { name : "Trippie Red", imageUrl: "https://i.imgur.com/D2mE5hr.jpeg"},
            { name : "Travis Scott", imageUrl: "https://i.imgur.com/przPcwB.jpeg"},
            { name : "A$AP Rocky", imageUrl: "https://i.imgur.com/uyOSE0Z.jpeg"},
            { name : "Tory Lanez", imageUrl: "https://i.imgur.com/zhRcoKF.jpeg"},
            { name : "Mac Miller", imageUrl: "https://i.imgur.com/9EmZxw8.jpeg"},
            { name : "Tyler the Creator", imageUrl: "https://i.imgur.com/aE53Rr8.jpeg"},
            { name : "Kid Cudi", imageUrl: "https://i.imgur.com/oioUCmA.jpeg"},
            { name : "Lil Uzi Vert", imageUrl: "https://i.imgur.com/Z6kXIH0.jpeg"},
            { name : "Baby Keem", imageUrl: "https://i.imgur.com/NijnAXn.jpeg"},
            { name : "Lil Xan", imageUrl: "https://i.imgur.com/j8pYvCI.jpeg"},
            { name : "Drake", imageUrl: "https://i.imgur.com/1ntB1G9.jpeg"},
            { name : "Gunna", imageUrl: "https://i.imgur.com/Rq4UndH.jpeg"},
        ],        
    },
    "ME": {
        "Drinks": [
            { name: "Wine", imageUrl: "https://t3.ftcdn.net/jpg/02/70/04/00/360_F_270040033_G5PQPgMwbQmyQlP5tHDCTEWWcSTBxCb3.jpg" },
            { name: "Bloody Mary", imageUrl: "https://static.wixstatic.com/media/2567e6_d9140a2715e4423fba3e1fc4b104389c~mv2.jpeg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/2567e6_d9140a2715e4423fba3e1fc4b104389c~mv2.jpeg" },
            { name: "Beer", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUv1ZTUxUykrMdzx3yy16SaF4GUfGL9pqSw&s" },
            { name: "Tea", imageUrl: "https://media.istockphoto.com/id/95574723/photo/english-tea-in-a-bone-china-cup.jpg?s=612x612&w=0&k=20&c=ZSdzzGzTz5d5SWXl3Lm5AdRNLWqDmXbmzaO5sqcHiFg=" },
            { name: "Arnold Palmer", imageUrl: "https://media.istockphoto.com/id/483819371/photo/arnold-palmer.jpg?s=612x612&w=0&k=20&c=h3wOCU6aobCOii6t8Bks5Rrs5LBENDGE05RjF25gmpk=" },
            { name: "Matcha", imageUrl: "https://mariamarlowe.com/wp-content/uploads/2021/04/3.jpeg" },
            { name: "Coffee", imageUrl: "https://media.istockphoto.com/id/1409749018/photo/iced-latte-coffee-on-plastic-glass-and-tube-sucking-isolated-white-background-summer-drink.jpg?s=612x612&w=0&k=20&c=GMZsopCg-V6Ayu0puSuhwl6VcvfIoYwmzqVz5eJy9bw=" },
            { name: "Dr. Pepper", imageUrl: "https://images.pexels.com/photos/13599790/pexels-photo-13599790.jpeg?cs=srgb&dl=pexels-luke-landon-314916084-13599790.jpg&fm=jpg" },
            { name: "Coke", imageUrl: "https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg" },
            { name: "Milk", imageUrl: "https://img.freepik.com/free-photo/fresh-milk-mug-jug-wooden-table_114579-18233.jpg" },
            { name: "Beez Kneez", imageUrl: "https://cdn.prod.website-files.com/60d29b6835d7d968e8cf95b5/670c0c72bb2420f892183e2b_61424151accb587092dd4e00_Ginger_Bees_Knees_5.jpeg" },
            { name: "Champagne", imageUrl: "https://vintus.com/wp-content/uploads/2018/08/07-25-26-2016_ayala-2939_-_blanc_de_blancs_by_the_glass.jpg" },
        ],
        "Fast Food Spots": [
            { name : "McDonalds", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/McDonald%27s_logo.svg" },
            { name : "Taco Bell", imageUrl: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_527,q_75,w_649/v1/crm/morrobayca/15431_taco_bell_FoodandDrink_logo-copy_5c6cd34b-5056-a36a-0697e4ed8e61f180.jpg" },
            { name : "Subway", imageUrl: "https://images.squarespace-cdn.com/content/v1/5a623160bce17601857614f8/1560461179139-8O27BADMQKY8CWE671K4/sandwich_subway.jpeg" },
            { name : "Wendy's", imageUrl: "https://a.abcnews.com/images/Business/HT_new_wendys_logo1_fast_food_thg_130716_4x3_608.jpg" },
            { name : "Chick-fil-A", imageUrl: "https://as1.ftcdn.net/v2/jpg/05/92/69/02/1000_F_592690265_gROaH68pyfgHokFhZVh25qlWUkhP2nwy.jpg" },
            { name : "Chi'Lantro", imageUrl: "https://images.squarespace-cdn.com/content/v1/54ce6d07e4b047e0ce425282/1446170315782-1V59O6QJSS1UO9CQ3JW3/image.jpg" },
            { name : "Chipotle", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3T61Q8ySVytcVHJdppPI7njPNHlHzfQaKCw&s" },
            { name : "Panda Express", imageUrl: "https://images.squarespace-cdn.com/content/v1/610bfbb399281144cf25fcc4/1628189477919-V1EMJ97BOA6WB6RMDQRV/panda-express-400x264.jpeg" },
            { name : "Cava", imageUrl: "https://redstickmom.com/wp-content/uploads/2023/02/4BA15647-64B7-4A78-A474-0FDC8C55C341-scaled.jpeg" },
            { name : "Five Guys", imageUrl: "https://miro.medium.com/v2/resize:fit:1024/1*VDm9pvIrmP43q2zWOsMALg.jpeg" },
            { name : "In-N-Out", imageUrl: "https://nmgprod.s3.amazonaws.com/media/file/2d/11/9a4af3c0e713e51d53e553796be0/cover_image__a18vHEaM__AdobeStock_702965959_Editorial_U.jpeg.760x400_q85_crop_upscale.jpg" },
            { name : "Shake Shack", imageUrl: "https://cdn.vox-cdn.com/thumbor/rtmPpnqSH5aFqpiWQyKCTW4NA-I=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24797970/20211104_ShakeShack__AudreyMa_0243.jpg" },
            { name : "Culvers", imageUrl: "https://sharpsheets.io/wp-content/uploads/2022/12/intro-1560520860.jpeg.webp" },
        ],
        "Snacks": [
            { name : "Doritos", imageUrl: "https://i5.walmartimages.com/seo/Doritos-Tortilla-Chips-Nacho-Cheese-Flavored-Snack-Chips-2-75-oz-Bag_c6a6c39d-c8b5-4478-beba-35e7f14e8171.26c8df2fae95aeb86bc07a3c81489399.jpeg" },
            { name : "Oreos", imageUrl: "https://i5.walmartimages.com/asr/13a65eb2-2749-43fb-a5b9-51d53f6ab678.5e881f2d51959d2be66e4044d8d0227a.jpeg"},
            { name : "Nerds Gummy Cluster", imageUrl: "https://res.cloudinary.com/droneup-llc/image/fetch/f_auto/https://i5.walmartimages.com/asr/ae58b1a0-9865-42d6-af76-7ffd05ea43ee.82f34bb0d6735e0c2947cf3a0af7cb74.jpeg"},
            { name : "Cheeze Its", imageUrl: "https://i5.walmartimages.com/seo/Kellogg-s-Cheez-It-Crackers-Original-1-5oz-60ct_cfb07069-c092-4ac9-a21d-9a1f8631d8dd.bd4686da8febb98849d598d7474211d7.jpeg"},
            { name : "Pickles", imageUrl: "https://m.media-amazon.com/images/I/81VrMclZUrL.jpg"},
            { name : "White Cheddar Cheetos", imageUrl: "https://i.ebayimg.com/images/g/7fUAAOSw7mpjWIKM/s-l400.jpg"},
            { name : "Butterfinger", imageUrl: "https://m.media-amazon.com/images/I/71jDDWyxU0L._AC_UF894,1000_QL80_.jpg"},
            { name : "Babybell Cheese", imageUrl: "https://target.scene7.com/is/image/Target/GUEST_d2e4d84e-2cf6-42f7-b7d1-1907ae370001?wid=488&hei=488&fmt=pjpeg"},
            { name : "Pop Tarts", imageUrl: "https://kellogg-h.assetsadobe.com/is/image/content/dam/kelloggs/kna/us/digital-shelf/pop-tarts/00038000222795_C1L1.jpg"},
            { name : "Goldfish", imageUrl: "https://i5.walmartimages.com/seo/Pepperidge-Farm-Goldfish-Cheddar-Crackers-1-5-oz-Single-Serve-Snack-Pack_b79db1ec-b9f6-48f7-ad3f-cb7b3408a3c3.546a89c6c991fbdeb40dfe977e1e9385.jpeg"},
            { name : "Popcorn", imageUrl: "https://i5.walmartimages.com/seo/Skinnypop-Original-Popcorn-4-4-Oz_93fe2512-c750-44e0-803f-4c1af36c3b89.49a74716ebe36a6d60ed57924330948b.jpeg"},
            { name : "Pringles", imageUrl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/12/02/Pringles_New_Can_Design_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1606934642599.jpeg"},
            { name : "Peanut Butter Crackers", imageUrl: "https://images.kglobalservices.com/www.kellanovaus.com/en_us/product/kic-803/prod_img-1426713_austin_aug_14.jpeg"},
        ],
        "TV Shows": [
            { name : "Friends", imageUrl: "https://play-images-prod-ctf.tech.tvnz.co.nz/api/v1/web/image/3CLEzO37tocxCoSmzzcxwx/2733ae58689b3e59e477a86d2da48a36/friends-showtile.png.2733ae58689b3e59e477a86d2da48a36.jpg?width=1200&height=630"},
            { name : "Normal People", imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2020-04/29/18/asset/c80b16ac2175/sub-buzz-259-1588184962-25.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto"},
            { name : "The Office", imageUrl: "https://www.usatoday.com/gcdn/presto/2020/03/23/USAT/c8d29efc-8433-4969-b675-e550ce3922b0-Ryan_then.jpeg"},
            { name : "Game of Thrones", imageUrl: "https://archive.org/download/gameofthrones_201911/Game_of_thrones.jpg"},
            { name : "Gossip Girl", imageUrl: "https://m.media-amazon.com/images/I/91I8ElmqRZL._AC_UF894,1000_QL80_.jpg"},
            { name : "The Good Place", imageUrl: "https://homeschool.humuhumu.com/content/images/size/w2000/2022/07/the-good-place.jpg"},
            { name : "The Bear", imageUrl: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/09/the-bear.jpeg"},
            { name : "House of the Dragon", imageUrl: "https://static.hbo.com/2024-05/house-of-the-dragon-s2-ka-1920.jpg"},
            { name : "Nobody Wants This", imageUrl: "https://resizing.flixster.com/DBYjm_rmri2A49HnsjZP_w8gPvo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27739292_b_h8_ab.jpg"},
            { name : "Tell Me Lies", imageUrl: "https://m.media-amazon.com/images/I/41mW-tyOJCL._SL500_.jpg"},
            { name : "Love Island", imageUrl: "https://admin.itsnicethat.com/images/7nd1VBlFdi_SifufpYPm3xP_Xs8=/150481/format-webp%7Cwidth-2880/5b60438d7fa44c44150001be.png"},
            { name : "Secret Lives of MW", imageUrl: "https://m.media-amazon.com/images/M/MV5BN2U0ZTIzOTItMjNmNS00ZjM5LTlhZGYtNmZmZjYxZmU5NjU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
            { name : "Shameless", imageUrl: "https://wallpapers.com/images/hd/shameless-original-motion-picture-soundtrack-p5mvmq839gkjwo89.jpg"},
        ],
        "Shopping Dopamine": [
            { name : "Sephora", imageUrl: "https://i.imgur.com/WsoQXY1.jpeg"},
            { name : "Nordstrom", imageUrl: "https://i.imgur.com/pURUGeU.jpeg"},
            { name : "Lulu", imageUrl: "https://i.imgur.com/LQKL6bb.jpeg"},
            { name : "Free People", imageUrl: "https://i.imgur.com/HfIL1Ql.jpeg"},
            { name : "Amazon", imageUrl: "https://i.imgur.com/Mnt6r1u.jpeg"},
            { name : "Target", imageUrl: "https://i.imgur.com/Z9KDk9f.jpeg"},
            { name : "Ulta", imageUrl: "https://i.imgur.com/eFhbDuD.jpeg"},
            { name : "Lush", imageUrl: "https://i.imgur.com/XSxno5B.jpeg"},
            { name : "Riff Raff", imageUrl: "https://i.imgur.com/OZokYmd.jpeg"},
            { name : "Skims", imageUrl: "https://i.imgur.com/OKUfuzN.jpeg"},
            { name : "Victoria's Secret", imageUrl: "https://i.imgur.com/QlvLbsC.jpeg"},
            { name : "The Container Store", imageUrl: "https://i.imgur.com/ekbkdQT.jpeg"},
            { name : "Trader Joe's", imageUrl: "https://i.imgur.com/0EZKjx5.jpeg"},
        ],
        "Iconic Pop Girlies": [
            { name : "Tate McCrae", imageUrl: "https://i.imgur.com/al4IDdr.jpeg"},
            { name : "Chappell Roan", imageUrl: "https://i.imgur.com/YJkMsks.jpeg"},
            { name : "Sabrina Carpenter", imageUrl: "https://i.imgur.com/md3MeCW.jpeg"},
            { name : "Gracie Abrams", imageUrl: "https://i.imgur.com/kVlcQa5.jpeg"},
            { name : "Olivia Rodrigo", imageUrl: "https://i.imgur.com/jf2jV1K.jpeg"},
            { name : "Renee Rapp", imageUrl: "https://i.imgur.com/Gt1faBD.jpeg"},
            { name : "Ariana Grande", imageUrl: "https://i.imgur.com/xCxwj4e.jpeg"},
            { name : "Billie Eilish", imageUrl: "https://i.imgur.com/Qu6Umje.jpeg"},
            { name : "Dua Lipa", imageUrl: "https://i.imgur.com/F4ZL84e.jpeg"},
            { name : "Taylor Swift", imageUrl: "https://i.imgur.com/4tjTiT6.jpeg"},
            { name : "Charlie XCX", imageUrl: "https://i.imgur.com/tJVxGQn.jpeg"},
        ],
        "Outfits": [
            { name : "Dickson Night Out", imageUrl: "https://i.imgur.com/XUwLxIZ.jpeg"},
            { name : "Sporty ACL", imageUrl: "https://i.imgur.com/9lLlzTu.jpeg"},
            { name : "Halloween Fun", imageUrl: "https://i.imgur.com/nFrUyMO.jpeg"},
            { name : "Festive NYE", imageUrl: "https://i.imgur.com/d5ydhNT.jpeg"},
            { name : "Army Vibes", imageUrl: "https://i.imgur.com/3wbdWN8.jpeg"},
            { name : "Pop of Color", imageUrl: "https://i.imgur.com/jf8tInL.jpeg"},
            { name : "Wedding Ready", imageUrl: "https://i.imgur.com/PVUGsaU.jpeg"},
            { name : "City Cowgirl", imageUrl: "https://i.imgur.com/EhmNL6M.jpeg"},
            { name : "Sweater Weather", imageUrl: "https://i.imgur.com/XrqsRsK.jpeg"},
            { name : "Sabrina Time", imageUrl: "https://i.imgur.com/BTQuNGs.jpeg"},
            { name : "Tiger", imageUrl: "https://i.imgur.com/ceWYKJk.jpeg"},
            { name : "Date Night Out", imageUrl: "https://i.imgur.com/zBSbJlA.jpeg"},
            { name : "Day on the Lake", imageUrl: "https://i.imgur.com/a28PNB0.jpeg"},
        ], 
    },
    "US": {
        "Noteworthy Events": [ 
            { name: "Corn Maze", imageUrl: "https://i.imgur.com/KANmv5z.jpeg" }, 
            { name: "Kate's Wedding", imageUrl: "https://i.imgur.com/gAhj9OF.jpeg" }, 
            { name: "Cailin's Wedding", imageUrl: "https://i.imgur.com/bkmi7sL.jpeg" }, 
            { name: "ISCO Anniversary", imageUrl: "https://i.imgur.com/8ROiJKA.jpeg" }, 
            { name: "Krooked Kings Concert", imageUrl: "https://i.imgur.com/5R9KJDP.jpeg" }, 
            { name: "Royals Game", imageUrl: "https://i.imgur.com/NfANcdn.jpeg" }, 
            { name: "Wilderado Concert", imageUrl: "https://i.imgur.com/HXgI7F5.jpeg" }, 
            { name: "V-Day Dinner", imageUrl: "https://i.imgur.com/H5TmbCk.jpeg" }, 
            { name: "Float Trip", imageUrl: "https://i.imgur.com/nRFwzpE.jpeg" }, 
            { name: "Dallas Weekend", imageUrl: "https://i.imgur.com/Qe4tZqf.jpeg" },
        ],
        "Noteworthy Dates": [ 
            { name: "Drinks at Maxines", imageUrl: "https://i.imgur.com/3SFqQiz.jpeg" }, 
            { name: "Your Bday Dinner", imageUrl: "https://i.imgur.com/BGaNf61.jpeg" }, 
            { name: "Juliet", imageUrl: "https://i.imgur.com/NPxVi3g.jpeg" }, 
            { name: "Drinks at Vault", imageUrl: "https://i.imgur.com/A5dzQ5k.jpeg" }, 
            { name: "Oysters in Austin", imageUrl: "https://i.imgur.com/ll0idaD.jpeg" }, 
            { name: "Saltgrass", imageUrl: "https://i.imgur.com/E2rg2IY.jpeg" }, 
            { name: "Picnic at Wilson", imageUrl: "https://i.imgur.com/HJdmp7G.jpeg" }, 
            { name: "Homemade Playdoh", imageUrl: "https://i.imgur.com/Auji1Hy.jpeg" }, 
            { name: "Pumpkin Carving", imageUrl: "https://i.imgur.com/hWsB830.jpeg" }, 
            { name: "Moonshine + MC", imageUrl: "https://i.imgur.com/5rEFUvz.jpeg" },
            { name: "Barton Springs Day", imageUrl: "https://i.imgur.com/QJjAJAO.jpeg" },
        ],
        "Datenight Activities": [
            { name : "Movie Night", imageUrl: "https://i.imgur.com/lfR7JzT.jpeg"},
            { name : "Dinner Out", imageUrl: "https://i.imgur.com/OlIWXQn.jpeg"},
            { name : "Bubble Bath", imageUrl: "https://i.imgur.com/EwDE2z9.jpeg"},
            { name : "Cooking", imageUrl: "https://i.imgur.com/S1Z9MCP.jpeg"},
            { name : "Concert", imageUrl: "https://i.imgur.com/wFnyy2A.jpeg"},
            { name : "Crafts", imageUrl: "https://i.imgur.com/Z0axOCL.jpeg"},
            { name : "Puzzle", imageUrl: "https://i.imgur.com/jvRUQ9H.jpeg"},
            { name : "Board Games", imageUrl: "https://i.imgur.com/vraL5x1.jpeg"},
            { name : "Polaroids", imageUrl: "https://i.imgur.com/YdGeoEi.jpeg"},
            { name : "Cuddling", imageUrl: "https://i.imgur.com/vF7BjeN.jpeg"},
            { name : "Legos", imageUrl: "https://i.imgur.com/7rEfpAF.jpeg"},
            { name : "Brewery", imageUrl: "https://i.imgur.com/14flhVa.jpeg"},
            { name : "Picnic", imageUrl: "https://i.imgur.com/EZLOggs.jpeg"},
        ],
        "Travel Destinations": [
            { name : "Portugal", imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*7T3k0uxu-GeYr7dgSqP2tA.jpeg"},
            { name : "Paris", imageUrl: "https://media.istockphoto.com/id/1436430810/photo/paris-eiffel-tower.jpg?s=612x612&w=0&k=20&c=twnPoKvqoTpraJNYTNrLBKASWjExRQMxoY9XPkHWJFQ="},
            { name : "Fiji", imageUrl: "https://miro.medium.com/v2/resize:fit:1000/1*ezJ-HCZ8zS80tpWJbfN1Qg.jpeg"},
            { name : "Northeast", imageUrl: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2017/01/HandLuggageOnly-13-6.jpg?resize=1000%2C1500&ssl=1"},
            { name : "SoCal", imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*UdoFYDyH2B80HgqOoMBi5g.jpeg"},
            { name : "Spain", imageUrl: "https://media.istockphoto.com/id/148543868/photo/park-guell-in-barcelona-spain.jpg?s=612x612&w=0&k=20&c=IYdRNJtNOxNaySqP7oKe37TR7XBQncj623Ye13qCxBs="},
            { name : "Italy", imageUrl: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/674/original/pexels-pixabay-208701.jpg?1650851381"},
            { name : "Cancun", imageUrl: "https://www.beachbound.com/siteassets/beachbounder-blog/where-to-stay/cancun/cun-hero.jpeg"},
            { name : "Jamaica", imageUrl: "https://www.heyjamaica.com/wp-content/uploads/2024/08/BLUE-HOLE-in-Ocho-Rios-Jamaica-scaled.jpeg"},
            { name : "Vietnam", imageUrl: "https://media.istockphoto.com/id/186977241/photo/floating-village-near-rock-islands-in-halong-bay.jpg?s=612x612&w=0&k=20&c=9OKlFCq3JJIKwe7KThPLf33NCczlwhzxuuNiaM-e2Qs="},
            { name : "South Carolina", imageUrl: "https://images.squarespace-cdn.com/content/v1/5bbbb655e4afe91fdad85823/1586817638240-I7I99E2F16662750HAT4/charleston.jpeg"},
            { name : "Napa Valley", imageUrl: "https://winestatic.com/unsafe/full-fit-in/1400x0/https://winerist.blob.core.windows.net/2289/products/9008/1cb1de90-7286-4ac2-97f7-b2b74a5a20c6.jpeg"},
            { name : "Greece", imageUrl: "https://media.istockphoto.com/id/1145450965/photo/santorini-island-greece.jpg?s=612x612&w=0&k=20&c=AY_kxRrkTjbDLhqpotxgW8CZp4ovEIM1tRdTrvXKcAM="},
        ],  
        "Meals Together": [
            { name : "Veggie Bowls", imageUrl: "https://i.imgur.com/G5vE40E.jpeg"},
            { name : "Short Ribs", imageUrl: "https://i.imgur.com/PiPC3jr.jpeg"},
            { name : "Steak Salad", imageUrl: "https://i.imgur.com/QvszLxc.jpeg"},
            { name : "Pastaroni", imageUrl: "https://i.imgur.com/zjlR1YU.jpeg"},
            { name : "Homemade Pizza", imageUrl: "https://i.imgur.com/Qirxg9X.jpeg"},
            { name : "Stir-fry", imageUrl: "https://i.imgur.com/L7MLWqR.jpeg"},
            { name : "Breakfast", imageUrl: "https://i.imgur.com/AGknSrr.jpeg"},
            { name : "Lemon Chicken Orzo Soup", imageUrl: "https://i.imgur.com/qZUXDcC.jpeg"},
            { name : "Steak and Potatoes", imageUrl: "https://i.imgur.com/i1Et5Sb.jpeg"},
            { name : "WP Taco Night", imageUrl: "https://i.imgur.com/JVHBS2G.jpeg"},
            { name : "Oven BBQ", imageUrl: "https://i.imgur.com/sRhh35P.jpeg"},
            { name : "Chicken Pot Pie", imageUrl: "https://i.imgur.com/w5dFnbo.jpeg"},
            { name : "Stuffed Chicken", imageUrl: "https://i.imgur.com/K5DctyD.jpeg"},
        ],
        "Pizza Spots": [
            { name : "Mellow Mushroom", imageUrl: "https://i.imgur.com/mDY7dmp.jpeg"},
            { name : "Pizzeria Ruby", imageUrl: "https://i.imgur.com/4nas6i2.jpeg"},
            { name : "Woodstone", imageUrl: "https://i.imgur.com/0D4DMD9.jpeg"},
            { name : "Mojos", imageUrl: "https://i.imgur.com/Vqw4l2N.jpeg"},
            { name : "Smokin Oak", imageUrl: "https://i.imgur.com/xyjNFrs.jpeg"},
            { name : "Waystone", imageUrl: "https://i.imgur.com/COIUQo8.jpeg"},
            { name : "US Pizza", imageUrl: "https://i.imgur.com/a4Y9l4Y.jpeg"},
            { name : "Tiny Tim's", imageUrl: "https://i.imgur.com/OmBvD2H.jpeg"},
            { name : "Papa Johns", imageUrl: "https://i.imgur.com/kPu25en.jpeg"},
            { name : "Pie Tap (Dallas)", imageUrl: "https://i.imgur.com/IZuC9mH.jpeg"},
            { name : "Wicked Wood Fired", imageUrl: "https://i.imgur.com/snCYjrs.jpeg"},
        ],
        "Fayetteville Bars": [
            { name : "Yee Hawg", imageUrl: "https://i.imgur.com/aWrl3q5.jpeg"},
            { name : "Shotz", imageUrl: "https://i.imgur.com/PAaNJ9r.jpeg"},
            { name : "Halo", imageUrl: "https://i.imgur.com/Yxo5K20.jpeg"},
            { name : "21st", imageUrl: "https://i.imgur.com/8mZ8hGM.jpeg"},
            { name : "DSP", imageUrl: "https://i.imgur.com/xZnroYE.jpeg"},
            { name : "Maxines", imageUrl: "https://i.imgur.com/jRjqXNB.jpeg"},
            { name : "Pinpoint", imageUrl: "https://i.imgur.com/JzH1Btl.jpeg"},
            { name : "The Vault", imageUrl: "https://i.imgur.com/8fyvdTO.jpeg"},
            { name : "Guisinger", imageUrl: "https://i.imgur.com/d8i3okQ.jpeg"},
            { name : "Kingfish", imageUrl: "https://i.imgur.com/R3WdxuC.jpeg"},
            { name : "Tin Roof", imageUrl: "https://i.imgur.com/1LxBLTU.jpeg"},
            { name : "Rogers Rec", imageUrl: "https://i.imgur.com/CM7fuL0.jpeg"},
            { name : "Piano Bar", imageUrl: "https://i.imgur.com/ta8jz6y.jpeg"},
        ],
        "Dog Breeds": [
            { name : "Golden Retriever", imageUrl: "https://i.imgur.com/NqR42MU.jpeg"},
            { name : "German Shepherd", imageUrl: "https://i.imgur.com/EaGgi1d.jpeg"},
            { name : "Yellow Lab", imageUrl: "https://i.imgur.com/UasyqoW.jpeg"},
            { name : "Corgi", imageUrl: "https://i.imgur.com/WWMIdEx.jpeg"},
            { name : "Cocker Spaniel", imageUrl: "https://i.imgur.com/bugWr5k.jpeg"},
            { name : "Chihuahua", imageUrl: "https://i.imgur.com/TCditKS.jpeg"},
            { name : "Wiener Dog", imageUrl: "https://i.imgur.com/kO3YLin.jpeg"},
            { name : "Maltese", imageUrl: "https://i.imgur.com/gBnflAJ.jpeg"},
            { name : "Pitbull", imageUrl: "https://i.imgur.com/LX26eR8.jpeg"},
            { name : "Greyhound", imageUrl: "https://i.imgur.com/oF4irXn.jpeg"},
            { name : "Doodle", imageUrl: "https://i.imgur.com/x5WMg9b.jpeg"},
            { name : "Great Dane", imageUrl: "https://i.imgur.com/C7KQ86L.jpeg"},
            { name : "St. Bernard", imageUrl: "https://i.imgur.com/rMPQDbE.jpeg"},
        ],
}

};

const password = "11182023";
let options = [];
let rankings = {};
let currentOptionIndex = 0;

// Shuffle the options array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Password verification
document.getElementById('verifyPassword').addEventListener('click', () => {
    const enteredPassword = document.getElementById('password').value;
    if (enteredPassword === password) {
        document.getElementById('passwordSection').style.display = 'none';
        document.getElementById('categorySelect').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
});

// Populate subcategories based on selected category
document.getElementById('category').addEventListener('change', () => {
    const selectedCategory = document.getElementById('category').value;
    const subcategorySelect = document.getElementById('subcategory');
    
    subcategorySelect.innerHTML = ''; // Clear current options

    if (gameData[selectedCategory]) {
        const subcategories = Object.keys(gameData[selectedCategory]);
        subcategories.forEach(subcat => {
            const optionElement = document.createElement('option');
            optionElement.value = subcat;
            optionElement.text = subcat;
            subcategorySelect.appendChild(optionElement);
        });
    }
});

// Start the game based on the selected category and subcategory
document.getElementById('startGame').addEventListener('click', () => {
    const selectedCategory = document.getElementById('category').value;
    const selectedSubcategory = document.getElementById('subcategory').value;
    
    if (selectedCategory && selectedSubcategory && gameData[selectedCategory][selectedSubcategory]) {
        options = shuffle([...gameData[selectedCategory][selectedSubcategory]]);
    } else {
        alert("Please select a valid category and subcategory.");
        return;
    }
    
    document.getElementById('categorySelect').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';

    rankings = {};
    currentOptionIndex = 0;
    document.getElementById('finalResults').innerHTML = '';
    document.getElementById('option').style.display = 'block';

    displayNextOption();
});

// Display the next option in the game
function displayNextOption() {
    if (currentOptionIndex < options.length) {
        const currentOption = options[currentOptionIndex];

        // Check if image URL is defined
        if (currentOption.imageUrl) {
            document.getElementById('optionImage').src = currentOption.imageUrl;
            document.getElementById('optionImage').alt = currentOption.name;
        } else {
            console.error(`Image URL not found for option: ${currentOption.name}`);
            document.getElementById('optionImage').src = ''; // Clear image if URL is missing
            document.getElementById('optionImage').alt = 'Image not available';
        }

        document.getElementById('option').innerText = currentOption.name;
    } else {
        displayResults();
    }
}

// Assign current option to selected rank and update box
document.querySelectorAll('.rankingBox').forEach(box => {
    box.addEventListener('click', () => {
        const rank = box.getAttribute('data-rank');
        const currentOption = options[currentOptionIndex];

        if (!rankings[rank]) {
            // Save the ranking
            rankings[rank] = currentOption;

            // Clear the box content
            box.innerHTML = '';

            // Create and add the image element to the box
            const imageElement = document.createElement('img');
            imageElement.src = currentOption.imageUrl;
            imageElement.alt = currentOption.name;
            imageElement.style.width = '100%'; // Adjust to fit box size
            imageElement.style.height = '100%';

            // Add image to the box
            box.appendChild(imageElement);

            // Move to the next option
            currentOptionIndex++;
            displayNextOption();

            checkAllAssigned();
        } else {
            alert("This rank is already assigned. Please choose an unassigned rank.");
        }
    });
});


// Check if all rankings are assigned and display results if done
function checkAllAssigned() {
    if (Object.keys(rankings).length === 10) {
        displayResults();
        document.getElementById('returnButton').style.display = 'block';
    }
}

// Display final results
function displayResults() {
    document.getElementById('option').style.display = 'none';

    let resultsHTML = '<h2>Your Final Rankings:</h2><ul>';
    for (let i = 1; i <= 10; i++) {
        const rankedItem = rankings[i] ? `${rankings[i].name}` : 'Unranked';
        resultsHTML += `<li>${i}: ${rankedItem}</li>`;
    }
    resultsHTML += '</ul>';
    document.getElementById('finalResults').innerHTML = resultsHTML;
}

// Reset game state when returning to category selection
document.getElementById('returnButton').addEventListener('click', () => {
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('categorySelect').style.display = 'block';
    document.getElementById('finalResults').innerHTML = '';
    document.getElementById('returnButton').style.display = 'none';

    rankings = {};
    document.querySelectorAll('.rankingBox').forEach(box => {
        const rank = box.getAttribute('data-rank');
        box.innerText = `${rank}`;
    });
});