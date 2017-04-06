function makeStory() {
	// get form values (2 points)
	var a_person_you_know = document.getElementById('a_person_you_know').value;
	var adjective = document.getElementById('adjective').value;
	var exclamation = document.getElementById('exclamation').value;
	var nasty_adjective = document.getElementById('nasty_adjective').value;
	var noun = document.getElementById('noun').value;
	var part_of_the_body = document.getElementById('part_of_the_body').value;
	var plural_noun_1 = document.getElementById('plural_noun_1').value;
	var plural_noun_2 = document.getElementById('plural_noun_2').value;
	var plural_noun_3 = document.getElementById('plural_noun_3').value;
	var plural_noun_4 = document.getElementById('plural_noun_4').value;
	var type_of_disease = document.getElementById('type_of_disease').value;
	// Set title of story. Use at least one form value in the title. (2 points)
	var title = type_of_disease + " Smoking ";

	// Build story. you can add as many paragraphs as you like. (3 points)
	var paragraph1 = "Medical science has discovered that smoking cigarettes causes " + type_of_disease + ". " + " It is also bad for your " + noun +
          	" and causes pains in the " + part_of_the_body + ". " + " When mice and dogs were exposed to " + adjective + " cigarette smoke, they developed " + a_person_you_know + "'s "+ " disease. " +
          	" Tobacco companies have put charcoal " + plural_noun_1 + " on the ends of cigarettes, but they still spend millions of " + plural_noun_2 +
          	" advertising their " + nasty_adjective + " product " + " . " + "If you smoke cigarettes, the tobacco will leave all kinds of tar and " + plural_noun_3 + " in your lungs. This will make you cough and say, " + exclamation + "! " + 
          	" Don't smoke cigarettes. Remember, only " + plural_noun_4 + " smoke " + ".";
	// Display story by putting title & paragraphs into appropriate divs. (3 points)
	document.getElementById('title').innerHTML = title;
	document.getElementById('one').innerHTML = paragraph1;
}
