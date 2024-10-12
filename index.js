
document.querySelector(".start").addEventListener("click",function () {
            let index = 1;
            const totalImages = 10;
            const names = [
                "SpiderMan", "Thor", "Deadpool", "BatMan", 
                "SuperMan", "Hulk", "BlackPanther", 
                "Wolverine", "Cyborg", "Groot"
            ];
            const interval = setInterval(() => {
                if (index > totalImages) {
                    clearInterval(interval);
                    displayRandomImage();
                } else {
                    document.querySelector("img").src = "SuperHero" + index + ".jpg";
                    document.querySelector(".op").innerHTML=names[index];
                    index++;
                }
            },100);

            setTimeout(() => {
                clearInterval(interval);
                displayRandomImage();
            }, 1000); 
        });

        function displayRandomImage() {
            const c = Math.floor(Math.random() * 10) + 1;
            const d = "SuperHero" + c + ".jpg";
            document.querySelector("img").src = d;

            const div = document.querySelector(".op");
            const names = [
                "SpiderMan", "Thor", "Deadpool", "BatMan", 
                "SuperMan", "Hulk", "BlackPanther", 
                "Wolverine", "Cyborg", "Groot"
            ];
            div.innerHTML = names[c - 1];
        }

        document.querySelector(".reset").addEventListener("click", function () {
            document.querySelector("img").src = "imglogo.jpg";
            document.querySelector(".op").innerHTML = "";
        });
    
