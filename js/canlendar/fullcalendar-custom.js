$(document).ready(function() {

	/* initialize the external events
			-----------------------------------------------------------------*/

			$('#external-events ul li.external-event').each(function() {

				// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
				// it doesn't need to have a start or end
				var eventObject = {
					title: $.trim($(this).text()) // use the element's text as the event title
				};

				// store the Event Object in the DOM element so we can get to it later
				$(this).data('eventObject', eventObject);

				// make the event draggable using jQuery UI
				$(this).draggable({
					zIndex: 999,
					revert: true,      // will cause the event to go back to its
					revertDuration: 0  //  original position after the drag
				});

			});
	
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		var calendar = $('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			selectable: true,
			selectHelper: true,
			select: function(start, end, allDay) {
				var title = prompt('Event Title:');
				if (title) {
					calendar.fullCalendar('renderEvent',
						{
							title: title,
							start: start,
							end: end,
							allDay: allDay
						},
						true // make the event "stick"
					);
				}
				calendar.fullCalendar('unselect');
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar !!!
						drop: function(date, allDay) { // this function is called when something is dropped

							// retrieve the dropped element's stored Event Object
							var originalEventObject = $(this).data('eventObject');

							// we need to copy it, so that multiple events don't have a reference to the same object
							var copiedEventObject = $.extend({}, originalEventObject);

							// assign it the date that was reported
							copiedEventObject.start = date;
							copiedEventObject.allDay = allDay;

							// render the event on the calendar
							// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
							$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

							// is the "remove after drop" checkbox checked?
							if ($('#drop-remove').is(':checked')) {
								// if so, remove the element from the "Draggable Events" list
								$(this).remove();
							}

						},
						selectable: true,
							selectHelper: true,
							select: function(start, end, allDay) {
								var title = prompt('Event Title:');
								if (title) {
									calendar.fullCalendar('renderEvent',
										{
											title: title,
											start: start,
											end: end,
											allDay: allDay
										},
										true // make the event "stick"
									);
								}
								calendar.fullCalendar('unselect');
							},
			events: [

				{
					title: '￥10000',
					start: new Date(y, m, d+1),
					end: new Date(y, m, d+1)
				},
				{
					title: '￥9999',
					start: new Date(y, m, d+2),
					end: new Date(y, m, d+2)
				},
				{
					title: '￥9999',
					start: new Date(y, m, d+3),
					end: new Date(y, m, d+3)
				},
				{
					title: '￥9999',
					start: new Date(y, m, d+4),
					end: new Date(y, m, d+4)
				},
				{
					title: '暂无',
					start: new Date(y, m, d+5),
					end: new Date(y, m, d+5)
				},
				{
					title: '￥9999',
					start: new Date(y, m, d+6),
					end: new Date(y, m, d+6)
				}
				//{
				//	id: 999,
				//	title: '例会kkk',
				//	start: new Date(y, m, d-3, 16, 0),
				//	allDay: false
				//},
				//{
				//	id: 999,
				//	title: '例会',
				//	start: new Date(y, m, d+4, 16, 0),
				//	allDay: false
				//},
				//{
				//	title: '工地视察',
				//	start: new Date(y, m, d, 10, 30),
				//	allDay: false
				//},
				//{
				//	title: '午饭',
				//	start: new Date(y, m, d, 12, 0),
				//	end: new Date(y, m, d, 14, 0),
				//	allDay: false
				//},
				//{
				//	title: '大修厂视察',
				//	start: new Date(y, m, d+1, 19, 0),
				//	end: new Date(y, m, d+1, 22, 30),
				//	allDay: false
				//}
//				{
//					title: 'Click for Google',
//					start: new Date(y, m, 28),
//					end: new Date(y, m, 29),
//					url: 'http://google.com/'
//				}
			]
		});
		
	});

