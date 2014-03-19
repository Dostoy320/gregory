/*****
AJAX call to Link Curator
*****/
function RetrieveLinkList() {
	var dataString = 'action=retrieve_post_by_type&post_type=link list';
	$.ajax({
		type: "POST",
		url: "admin/index.php",
		data: dataString,
		dataType: 'json',
		success: function(data) {
			$("#from_wysiwyg").html(data.content);
			$("#container").hide( "blind", { direction: "down" }, 300);
			$("#curator_links").delay(1000).fadeIn(400);
		}
	})
}


/*****
AJAX call to Preach for blog content
*****/
function RetrieveLastPost() {
	var dataString = 'action=retrieve_post_by_type&post_type=front page';

	$.ajax({
		type: "POST",
		url: "admin/index.php",
		data: dataString,
		dataType: 'json',
		success: function(data) {
			$("#blog_post #blog_title h4").html(data.title);
			$("#blog_post #blog_date small").html(data.datetime);
			$("#blog_post #blog_content").html(data.content);
		}
	})
}

/*****
Toggle title overlay on project photos.
*****/
$("#column_r .projects").hover(function() {
	$(".overlay", this).css("visibility", "visible");
}, function() {
	$(".overlay", this).css("visibility", "hidden")
}
);

/*****
Animations for the Spec page.
*****/

/*** Animate the "specs" tab to grow/shrink on hover ***/
$("#tab").hover(function() {
		$(this).animate({height: "30px"}, 200);
		$(this).animate({paddingTop: "10px"}, 200);
	}, function() {
		$(this).animate({paddingTop: "0px"}, 200);
		$(this).animate({height: "20px"}, 200);
	}
);

/*** Hides/shows the main page/specs. ***/
function ShowSpecs() {
	$("#container").hide( "blind", { direction: "down" }, 300);
	$("#specs").delay(1000).fadeIn(400);
};

function ShowMain() {
	$(".mostly_hidden").fadeOut(400);
	$("#container").delay(1000).show( "blind", 300);
}

/*****
Load the intro for Preach
*****/
function PreachIntro() {
	$("#container").hide( "blind", { direction: "down" }, 300);
	$("#preach_intro").delay(500).fadeIn(400);
}

function ShowPreach() {
	window.open('sample/preach/index.php', '_blank');
	$(".mostly_hidden").fadeOut(400);
	$("#container").delay(1000).show( "blind", 300);
}

/* AJAX call for recent blog post */
RetrieveLastPost()

/* Navigate to Specs page from tab click */
$("#tab").on("click", ShowSpecs);

/* Exit Specs and return to main page */
$(".exit").on("click", ShowMain);

/* Visit Preach intro from projects pane */
$("#preach_link").on("click", PreachIntro);

/* Move on to Preach and transitino back to main page */
$("#preach_nav #preach_continue").on("click", ShowPreach);

/* Back out of Preach intro to main page */
$("#preach_nav #preach_meh").on("click", ShowMain);

/* Navigate to Link Curator page */
$("#link_curator").on("click", RetrieveLinkList);

