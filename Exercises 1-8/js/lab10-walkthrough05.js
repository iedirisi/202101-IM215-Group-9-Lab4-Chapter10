$(function	()	{					
				//	create	a	new	DOM	element
				var	img	=	$('<img	src="images/art/thumbs/13030.jpg"	>');				
				//	and	now	add	the	new	element	after	the	panel
				var	panel	=	$('.panel');						
				// panel.append(img); 
				// panel.prepend(img);	
				// img.appendTo(panel);	
				// img.prependTo(panel);	
				img.insertBefore(panel);
});
