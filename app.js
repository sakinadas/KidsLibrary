var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider){
	$routeProvider
		.when("/library", {
			templateUrl: "partials/library.html",
			controller: "LibraryCtrl"
		})
		.when("/timetable", {
			templateUrl: "partials/timetable.html",
			controller: "TimeTableCtrl"
		})

	.otherwise({
		redirectTo: "/library"
	});
});

myApp.factory("LibraryService", function(){
	var books = [
		{
			imgUrl: "imgs/littleree.jpg",
			name: 'Little Ree (Signed Book)',
			price: 11.24,
			rating: 4,
			author: "Ree Drummond, Jacqueline Rogers",
			format: "Hardcover",
			details: 'Little Ree trades in her city days for a country way of life when she moves with her family to her grandparents’ ranch. She’s excited to ride horses, swim in the pond, and help Grandma cook for everyone. But on her first day, she finds that living on a ranch can be tough. She has to get up at the crack of dawn, learn to herd cows, and make sure her horse, Pepper, doesn’t eat everything in sight. And that’s all before breakfast! Will she ever get used to this new place? Luckily, the end of the day brings a big family barbecue...and the happy discovery that being a country girl isn’t about the right pair of boots, it’s all about the right attitude.',
		    publisher: 'HarperCollins Publishers',
            releaseDate: 03/28/2017
        },

        {
            imgUrl: "imgs/backyard.jpg",
            name: 'Our Great Big Backyard',
            price: 12.57,
            rating: 4,
            author: " Laura Bush, Jenna Bush Hager",
            format: "Hardcover",
            details: 'Our Great Big Backyard follows Jane, whose plans of spending the summer playing video games with her friends are dashed when her parents announce that her family is going on a road trip to national parks around the country. Yet somewhere between the Everglades and Big Bend National Park, things begin to change. Jane starts paying attention to the magnificent sights and spends less time looking at her screen. The stunning views open up her imagination as she and her brother see everything that nature has to offer. And the more Jane discovers, the more she realizes how much there is to love about the outdoors—whether she’s in a national park across the country or right in her own backyard.',
            publisher: 'HarperCollins Publishers',
            releaseDate: 05/10/2016
        },

        {
            imgUrl: "imgs/froggy.jpg",
            name: 'Freddy the Frogcaster',
            price: 13.18,
            rating: 3.5,
            author: "Janice Dean",
            format: "Hardcover",
            details: 'Freddy the Frog loves learning about the weather, and he’s known for having the best predictions in town. But what happens when the town picnic is almost ruined by a storm that catches the local frogcaster by surprise? Freddie has to step in to save the day!',
            publisher: "Regnery Publishing",
            releaseDate: 08/26/2013
        },

        {
            imgUrl: "imgs/pete.jpg",
            name: 'Pete the Cat and His Magic Sunglasses',
            price: 13.65,
            rating: 5,
            author: " James Dean, Kimberly Dean",
            format: "Hardcover",
            details: "Pete the Cat is back in New York Times bestselling artist James Dean's picture book Pete the Cat and His Magic Sunglasses, written by Kimberly Dean. Pete the Cat wakes up feeling grumpy—nothing seems to be going his way. But with the help of some magic sunglasses, Pete learns that a good mood has been inside him all along",
            publisher: 'HarperCollins Publishers',
            releaseDate: 10/01/2013
        },

        {
            imgUrl: "imgs/dino.jpg",
            name: 'How Do Dinosaurs Go to School?',
            price: 11.45,
            rating: 3.5,
            author: "Jane Yolen, Mark Teague (Illustrator)",
            format: "Hardcover",
            details: "The bestselling, award-winning team of Yolen and Teague are back with another dinosaur tale--a fourth full-length picture book about how dinosaurs behave at school.Everyone's favorite dinosaurs are back--and this time they are going to school. More fun dinosaur antics await. These prehistoric pupils are in a class of their own!",
            publisher: 'Scholastic, Inc.',
            releaseDate: 07/01/2007
        }
	];

	return{
		getBooks: function(){
			return books;
		}
	}
});

myApp.factory("TimeTableService", function(){
	var ttable = [];
	return{
		getttable: function(){
			return ttable;
		},
		addToTimeTable: function(book){
			ttable.push(book);
		},
		checkout: function(book){
			alert("You have added : ", book.name, " successfully.");
		}

	}
});

myApp.controller("TimeTableCtrl", function($scope, TimeTableService){
	$scope.ttable = TimeTableService.getttable();
	$scope.checkout = function(book){
		TimeTableService.checkout(book);
	}
});

myApp.controller("HeaderCtrl", function($scope){
	$scope.appDetails = {
	    title: "Learning by the HoUR.",
        imgUrl: "imgs/logo1.png",
		tagline: "It is all about read, learn, fun and play."
	};	
});

myApp.controller("LibraryCtrl", function($scope, LibraryService, TimeTableService){
	$scope.books = LibraryService.getBooks();

	$scope.addToTimeTable = function(book){
		TimeTableService.addToTimeTable(book);
	}
});
