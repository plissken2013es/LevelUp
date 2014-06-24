var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-25710399-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

document.onselectstart = function() { return false; };

$( document ).ready(function() {

	// Save/Load Object
	var data = {
		versionData: 0,

		remove: function(){
			this.setCookie('levelUp', 'BUUURRNNNN!');
			$('.reset').html('Deleted! Reload now for new game!');
			setTimeout(function(){
				$('.reset').html('Delete');
			},2000);
		},

		save: function(){
			$('.save').html('Saving!');
			var saveData = new Object();

			// Player Data
			saveData['player'] = new Object();
			for (var i in player){
			    if (player.hasOwnProperty(i)){
			    	saveData['player'][i] = player[i];
			    }
			}

			// Quest Data
			saveData['quest'] = new Object();
			saveData['quest']['quests'] = new Object();
			for (var i in quest.quests){		
				var d = {completed: quest.quests[i].completed, battles: quest.quests[i].battles,};
				if(d.completed == -1){
					d.completed = 0;
				}
				saveData['quest']['quests'][quest.quests[i].class] = d;
			}

			// Store Data
			saveData['store'] = new Object();
			saveData['store']['items'] = new Object();
			for (var i in store.items){		
				var d = {cost: store.items[i].cost, limit: store.items[i].limit, visible:$('.'+store.items[i].class).is(":visible"),};
				saveData['store']['items'][store.items[i].class] = d;
			}

			// Skills Data
			saveData['skills'] = new Object();
			saveData['skills']['items'] = new Object();
			for (var i in skills.items){
				var d = {cost: skills.items[i].cost, limit: skills.items[i].limit, visible:$('.'+skills.items[i].class).is(":visible"),};
				saveData['skills']['items'][skills.items[i].class] = d;
			}

			// Magic Data
			saveData['magic'] = new Object();
			saveData['magic']['items'] = new Object();
			for (var i in magic.items){
				var d = {cost: magic.items[i].cost, limit: magic.items[i].limit, visible:$('.'+magic.items[i].class).is(":visible"),};
				saveData['magic']['items'][magic.items[i].class] = d;
			}

			this.setCookie('levelUp', JSON.stringify(saveData));
			$('.save').html('Saved!');
			setTimeout(function(){
				$('.save').html('Save');
			},2000);
		},

		load: function(){

			$.get('new-version.txt', function(d){
				data.versionData = d;
			});

			$('.save').on('click',function(){
				data.save();
			});

			$('.reset').on('click',function(){
				data.remove();
			});

			var loadData = this.getCookie('levelUp');
			if(loadData){
				loadData = JSON.parse(loadData);

				// Player
				for (var i in loadData.player){
				    if (loadData.player.hasOwnProperty(i)){
				    	player[i] = loadData.player[i];
				    }
				}

				// Quests
				for (var i in quest.quests){		
					if(loadData.quest.quests[quest.quests[i].class]){
						quest.quests[i].completed = loadData.quest.quests[quest.quests[i].class].completed;
						quest.quests[i].battles = loadData.quest.quests[quest.quests[i].class].battles;
					}
				}

				// Store
				for (var i in store.items){		
					if(loadData.store.items[store.items[i].class]){
						store.items[i].cost = loadData.store.items[store.items[i].class].cost;
						$('.'+store.items[i].class+' .cost').html(store.items[i].cost+' Gold');
						store.items[i].limit = loadData.store.items[store.items[i].class].limit;
						if(loadData.store.items[store.items[i].class].visible){
							$('.'+store.items[i].class).show();
						}
					}
				}

				// Skills
				for (var i in skills.items){		
					if(loadData.skills.items[skills.items[i].class]){
						skills.items[i].cost = loadData.skills.items[skills.items[i].class].cost;
						$('.'+skills.items[i].class+' .cost').html(skills.items[i].cost+' Sp');
						skills.items[i].limit = loadData.skills.items[skills.items[i].class].limit;
						if(loadData.skills.items[skills.items[i].class].visible){
							$('.'+skills.items[i].class).show();
						}
					}
				}

				// Magic
				for (var i in magic.items){		
					if(loadData.magic.items[magic.items[i].class]){
						magic.items[i].cost = loadData.magic.items[magic.items[i].class].cost;
						$('.'+magic.items[i].class+' .cost').html(magic.items[i].cost+' Mp');
						magic.items[i].limit = loadData.magic.items[magic.items[i].class].limit;
						if(loadData.magic.items[magic.items[i].class].visible){
							$('.'+magic.items[i].class).show();
						}
					}
				}
			}
		},

		setCookie: function(key, value){
			// Build the expiration date string:
			var expiration_date = new Date();
			var cookie_string = '';
			expiration_date.setFullYear(expiration_date.getFullYear() + 1);
			// Build the set-cookie string:
			cookie_string = key+"="+value+"; path=/; expires=" + expiration_date.toGMTString();
			// Create/update the cookie:
			document.cookie = cookie_string;
		},

		getCookie: function(key){
		    var name = key + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++){
		        var c = ca[i].trim();
		        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		    }
		    return "";
		},
	}

	// Player Object
	var player = {

		name: 'Player',

		level: 1,
		xp: 0,
		xpMod: 1,
		targetXp: 50,

		skillPoints: 0,
		growthMod: 1,

		str: 1,
		intel: 1,
		armor: 0,

		XPS: 1,
		SPS: 1,

		HP: 10,
		HPM: 10,
		HPL: 1,

		MP: 5,
		MPM: 5,
		MPL: 0,

		gold: 0,
		luck: 1,

		location: 'battle', // town

		step: function(){
			this.xp += Math.floor(this.XPS * this.xpMod);

			player.act();

			this.MP++;
			if(this.MP > this.MPM){
				this.MP = this.MPM;
			}

			this.levelup();
			
		},

		act: function(){
			switch(this.location){
				case 'town':

					break;
				case 'inn':
					var gain = 2 + Math.floor(player.level / 10);
					player.HP += gain;
					view.history(this.name+' has regained '+gain+' Hp.', 'player');
					if(player.HP >= player.HPM){
						player.HP = player.HPM;
						player.location = 'battle'; // town
						view.history(this.name+' has fully recovered at the Inn.');
					}
					break;
				case 'battle':
					if(monster.current == 0 || monster.current.hp <= 0){
						monster.comes();
					} else {
						monster.fight();
					}

					if(this.HP <= 0){
						player.die();
					}	
					break;
			}
		},

		levelup: function(){
			if(this.xp >= this.targetXp){
				this.xp -= this.targetXp;
				this.level++;
				this.targetXp = Math.floor((this.level * 10 + 40) / this.growthMod);
				this.skillPoints += this.SPS;

				this.HPM += this.HPL;
				this.HP == this.HPM;
				this.MPM += this.MPL;
			}
		},

		die: function(){
			view.history('<strong>'+this.name+' has been wiped out by the '+monster.current.name+' and crawls back to the Inn to recover.</strong>');
			if(quest.current){
				monster.current = 0;
			}
			this.location = 'inn';
			this.HP=0;
		},
	}

	// View Object
	var view = {
		update: function(){
			document.title = player.skillPoints + ' Sp - Level Up!';
			$('.level').html('Level ' + nn(player.level));
			$('.sp').html(nn(player.skillPoints) + ' Sp');
			$('.sps').html(nn(player.SPS) + ' Sp per level');
			$('.xp-total').html(nn(player.xp) + '/' + nn(player.targetXp) + ' Xp');
			$('.xps').html(nn(Math.floor(player.XPS * player.xpMod)) + ' Xp per second');

			var gain = (100 / (player.targetXp / player.xp));
			if(gain > 100){
				gain = 100;
			}
			$('.xp-bar-bar').css({width: gain + '%'});

			$('.hp').html(nn(player.HP) + '/' + nn(player.HPM));
			$('.mp').html(nn(player.MP) + '/' + nn(player.MPM));
			$('.str').html(nn(player.str));
			$('.int').html(nn(player.intel));
			$('.armor').html(nn(player.armor));

			$('.gold').html(nn(player.gold));

			$('.history').html($('.history li').slice(0,10));

			switch(player.location){
				case 'town':
					$('body').css({background: 'white'});
					break;
				case 'inn':
					$('body').css({background: 'tan'});
					break;
				case 'quest':
					$('body').css({background: 'gold'});
					break;
				case 'battle':
					$('body').css({background: 'pink'});
					break;
			}

			$('.store-list .cost').each(function(){
				var c = parseInt($(this).html().replace(/,/g, ""));
				if(c > player.gold){
					$(this).parent().addClass('cant-buy');
				} else {
					$(this).parent().removeClass('cant-buy');
				}
			});

			$('.skills-list .cost').each(function(){
				var c = parseInt($(this).html().replace(/,/g, ""));
				if(c > player.skillPoints){
					$(this).parent().addClass('cant-buy');
				} else {
					$(this).parent().removeClass('cant-buy');
				}
			});

			$('.magic-list .cost').each(function(){
				var c = parseInt($(this).html().replace(/,/g, ""));
				if(c > player.MP){
					$(this).parent().addClass('cant-buy');
				} else {
					$(this).parent().removeClass('cant-buy');
				}
			});

			if(quest.current && quest.current.completed != 1){
				$('.quests').hide();
				$('.current-quest').html('<li class="heading"><h2>Current Quest</h2></li><li><h3>'+quest.current.name+'</h3><em>'+quest.current.description+'</em><br><strong>Battles til Boss: '+quest.current.battles+'</strong></li><li class="abandon">Abandon</li>');
				$('.abandon').on('click',function(){
					view.history(player.name+' runs away like a little bitch!','player');
					monster.current = 0;
					quest.current.completed = 0;
					quest.current.battles = quest.current.battlesStart;
					quest.current = 0;
				});
				$('.current-quest').show();
			} else {
				$('.quests').show();
				$('.current-quest').hide();
			}

			store.update();
			skills.update();
			quest.update();
		},

		history: function(msg, c){
			$('.history').prepend('<li style="display: none;" class="'+c+'">'+msg+'</li>');
			$('.history li').fadeIn(250);
		},
	}

	// Quest Object
	var quest = {
		quests: [
		//{class:'',name:'',description:'',xp:n,gold:n,battles:n,level:n,pre:'class',completed:0
		//	mobs:[{name:'',str:n,hp:n,gold:n,xp:n,image:''},]
		//	boss:{name:'',str:n,hp:n,gold:n,xp:n,image:''}},


		// Slime Xenocide
			{class:'cave-of-slime',name:'Cave of Slime',description:'Fight your way through and kill the Slime King!',xp:550,gold:500,battles:15,level:1,pre:'none',completed:0,
			mobs: [
				construct_mob('Green Slime', 1, 3, 3, 15),
				construct_mob('Red Slime',   1, 4, 4, 17),
				construct_mob('Blue Slime',  1, 5, 5, 19),
				construct_mob('Bat',         2, 4, 4, 17),
				construct_mob('Rat',         3, 5, 7, 35)
			],
			boss: {name:'Slime King',str:3,hp:10,gold:30,xp:55,image:'slimeking'}},
			{class:'slime-city',name:'Slime City',description:'The Slime King was a decoy! Head to Slime City and kill the real King!',xp:850,gold:700,battles:30,level:1,pre:'cave-of-slime',completed:0,
			mobs: [
				construct_mob('Green Slime',      3,  3,  3, 15),
				construct_mob('Red Slime',        3,  4,  4, 17),
				construct_mob('Blue Slime',       3,  5,  5, 19),
				construct_mob('Slime King Decoy', 5,  7, 20, 25),
				construct_mob('Purple Slime',     5, 15, 15, 19)
			],
			boss: {name:'True Slime King',str:10,hp:50,gold:44,xp:75,image:'trueslimeking'}},
			{class:'slime-crypt',name:'Slime Crypt',description:'Take that slimes! Now go dig up their dead and desecrate their corpses!',xp:1250,gold:1000,battles:50,level:1,pre:'slime-city',completed:0,
			mobs: [
				construct_mob('Blue Slime',   3,  5,  5, 19),
				construct_mob('Slime Zombie', 2, 50, 20, 25),
				construct_mob('Purple Slime', 5, 15, 15, 19),
				construct_mob('Slime Ghoul',  3, 40, 25, 27)
			],
			boss: {name:'Zombie True Slime King',str:10,hp:150,gold:444,xp:275,image:'zombietrueslimeking'}},
			{class:'slime-day-care',name:'Slime Day Care',description:'Kill some of their kids',xp:1250,gold:1000,battles:100,level:1,pre:'slime-city',completed:0,
			mobs: [
				construct_mob('Slime Baby',    6,  5,  15, 19),
				construct_mob('Slime Toddler', 2,  5, 120, 25),
				construct_mob('Slime Parent',  7, 15, 115, 19),
				construct_mob('Slime Teacher', 3, 40, 125, 27)
			],
			boss: {name:'Slime Bully',str:13,hp:130,gold:344,xp:255}},
			{class:'slime-god',name:'Slime God',description:'The crypt had a gateway to Slime Heaven! Go kill Slime God!',xp:1750,gold:1400,battles:100,level:1,pre:'slime-crypt',completed:0,
			mobs: [
				construct_mob('Holy Slime',      6, 25, 150, 190),
				construct_mob('Slime Angel',     7, 23, 155, 211),
				construct_mob('Slime Archangel', 8, 28, 170, 290),
				construct_mob('Slime of Slimes', 6, 20, 145, 140)
			],
			boss: {name:'Slime God',str:17,hp:166,gold:544,xp:475}},


		// Hellish Invasion
			{class:'gates-of-hell',name:'Gates of Hell',description:'Break into hell!',xp:1666,gold:666,battles:50,level:20,pre:'none',completed:0,
			mobs: [
				construct_mob('Small Demon',   5, 20, 25, 45),
				construct_mob('Medium Demon', 10, 40, 50, 65),
				construct_mob('Large Demon',  15, 80, 75, 85)
			],
			boss: {name:'Horned Devil',str:15,hp:100,gold:40,xp:150}},
			{class:'streets-of-hell',name:'Streets of Hell',description:'What? Hell is filled with women and children!',xp:2666,gold:1666,battles:100,level:20,pre:'gates-of-hell',completed:0,
			mobs: [
				construct_mob('Woman',          1, 20, 20, 25),
				construct_mob('Toddler',        1, 14, 21, 23),
				construct_mob('Pregnant Woman', 1, 21, 24, 27),
				construct_mob('Child',          1, 26, 10, 29)
			],
			boss: {name:'Your Grandma',str:20,hp:100,gold:66,xp:666}},
			{class:'retirehell',name:'RetireHell',description:'Now it is nothing but old people, what is going on!?',xp:3666,gold:2666,battles:150,level:20,pre:'streets-of-hell',completed:0,
			mobs: [
				construct_mob('Gramps',         1, 20, 20, 25),
				construct_mob('Gran',           1, 14, 21, 23),
				construct_mob('Crazy Cat Lady', 1, 21, 24, 27),
				construct_mob('Coot',           1, 26, 10, 29)
			],
			boss: {name:'Your Grandfather',str:20,hp:150,gold:66,xp:666}},
			{class:'family-reunion',name:'Family Reunion',description:'Fight your way through your entire ancestry!',xp:4666,gold:3666,battles:250,level:20,pre:'retirehell',completed:0,
			mobs: [
				construct_mob('Great Grandpa',       1,  20, 120, 25),
				construct_mob('Great Great Grandma', 1, 114,  21, 23),
				construct_mob('Great Cousin',        1,  21, 124, 27),
				construct_mob('Misc. Ancestor',      1,  26, 110, 29)
			],
			boss: {name:'Adam and Eve',str:30,hp:200,gold:66,xp:666}},
			{class:'true-hell',name:'True Hell',description:'Finally, you have reached True Hell',xp:5666,gold:4666,battles:666,level:20,pre:'family-reunion',completed:0,
			mobs: [
				construct_mob('True Demon', 12, 66, 266, 666)
			],
			boss: {name:'True Satan',str:36,hp:666,gold:666,xp:666}},


		// Pots and Stealing
			{class:'break-pots',name:'Breaking Pots',description:'Go into that house and break some pots',xp:2000,gold:1000,battles:50,level:30,pre:'none',completed:0,
			mobs: [
				construct_mob('Brown Pot', 6, 40, 50, 50)
			],
			boss: {name:'Homeowner',str:1,hp:1,gold:1,xp:1}},
			{class:'open-chests',name:'Open Chests',description:'See that village storehouse? Raid it!',xp:2000,gold:1000,battles:150,level:30,pre:'break-pots',completed:0,
			mobs: [
				construct_mob('Guard',      8, 45, 50, 50),
				construct_mob('Fat Guard',  8, 65, 55, 40),
				construct_mob('Big Guard', 10, 45, 40, 55)
			],
			boss: {name:'Mimic',str:10,hp:100,gold:100,xp:100}},
			{class:'elders-house',name:'Elder\'s House',description:'Go take everything in the Elder\'s house',xp:2000,gold:1000,battles:250,level:30,pre:'open-chests',completed:0,
			mobs: [
				construct_mob('Golden Pot', 8, 75, 50, 50)
			],
			boss: {name:'Elder',str:1,hp:10,gold:1000,xp:1000}},


		// Fetch Quests
			{class:'the-rock',name:'Get a Rock',description:'There are special rocks on the Death Plains, get me one',xp:5000,gold:5000,battles:50,level:50,pre:'none',completed:0,
			mobs: [
				construct_mob('Horror From Beyond', 10, 70, 50, 50),
				construct_mob('Unholy Demon',       12, 90, 50, 50),
				construct_mob('Terrible Beast',     10, 66, 50, 50)
			],
			boss: {name:'Rock Guardian',str:16,hp:100,gold:100,xp:100}},
			{class:'the-paper',name:'Get some Paper',description:'This rock is great and all, but now I need some paper',xp:5000,gold:5000,battles:50,level:50,pre:'the-rock',completed:0,
			mobs: [
				construct_mob('Writing Desk', 1, 1, 1, 1),
				construct_mob('Folder',       1, 1, 1, 1),
				construct_mob('Tree',         1, 1, 1, 1)
			],
			boss: {name:'Paper Guardian',str:22,hp:130,gold:100,xp:100}},
			{class:'the-scissors',name:'Get a Pair of Scissors',description:'Cool, now bring me some scissors',xp:5000,gold:5000,battles:50,level:50,pre:'the-paper',completed:0,
			mobs: [
				construct_mob('Grade Schooler',           10, 100, 1, 1),
				construct_mob('Boy with Glue',             7, 160, 1, 1),
				construct_mob('Girl with Dragon Sticker', 13,  70, 1, 1)
			],
			boss: {name:'Class Artist',str:25,hp:150,gold:100,xp:100}},


		// Deathmarch
			{class:'deathmarch-one',name:'Deathmarch',description:'The March of Death!',xp:10000,gold:10000,battles:100,level:100,pre:'none',completed:0,
			mobs: [
				construct_mob('Runner', 20, 50, 200, 200)
			],
			boss: {name:'Mad Runner',str:30,hp:200,gold:400,xp:400}},
			{class:'deathmarch-two',name:'Deathmarch Two',description:'The redeathmarchening',xp:20000,gold:20000,battles:1000,level:100,pre:'deathmarch-one',completed:0,
			mobs: [
				construct_mob('Runner', 20, 50, 200, 200)
			],
			boss: {name:'Mad Runner',str:30,hp:300,gold:400,xp:400}},
			{class:'deathmarch-three',name:'Deathmarch Three',description:'Ten Thousand Runners',xp:30000,gold:30000,battles:10000,level:100,pre:'deathmarch-two',completed:0,
			mobs: [
				construct_mob('Runner', 20, 50, 200, 200)
			],
			boss: {name:'Mad Runner',str:30,hp:400,gold:400,xp:400}},
			{class:'deathmarch-four',name:'Deathmarch Four',description:'No way can you cut down 100,000 of these guys...',xp:40000,gold:40000,battles:100000,level:100,pre:'deathmarch-three',completed:0,
			mobs: [
				construct_mob('Runner', 20, 50, 200, 200)
			],
			boss: {name:'Mad Runner',str:30,hp:500,gold:400,xp:400}},
			{class:'deathmarch-five',name:'Deathmarch Five',description:'You can\'t handle the truth!',xp:50000,gold:50000,battles:1000000,level:100,pre:'deathmarch-four',completed:0,
			mobs: [
				construct_mob('Runner', 20, 50, 200, 200)
			],
			boss: {name:'Mad Runner',str:30,hp:600,gold:400,xp:400}},
			{class:'deathmarch-six',name:'Deathmarch Six',description:'In this form, my runners are over one million!',xp:100000,gold:100000,battles:10000000,level:100,pre:'deathmarch-five',completed:0,
			mobs: [
				construct_mob('Runner', 20, 50, 200, 200)
			],
			boss: {name:'Running Bastard',str:50,hp:1000,gold:4000,xp:4000}},


		// Bill Cosby
			{class:'the-cos',name:'Because Cosby',description:'Time to take on the Cosby Kids',xp:10000,gold:5000,battles:25,level:200,pre:'none',completed:0,
			mobs: [
				construct_mob('Mushmouth',      15, 40, 25, 45),
				construct_mob('Russell',        10, 40, 50, 65),
				construct_mob('"Weird" Harold', 15, 80, 75, 85),
				construct_mob('Bucky',          13, 40, 50, 75)
			],
			boss: {name:'"Fat" Albert',str:15,hp:100,gold:40,xp:150}},
			{class:'the-wizard-of-cos',name:'We\'re off to see...',description:'Head down the yellow brick road',xp:10000,gold:5000,battles:65,level:200,pre:'the-cos',completed:0,
			mobs: [
				construct_mob('"Cliff" Huxtable',     15, 60, 45, 55),
				construct_mob('Clair Hanks Huxtable', 10, 40, 50, 65),
				construct_mob('Theo',                 17, 80, 75, 85),
				construct_mob('Vanessa',              13, 40, 50, 75),
				construct_mob('Rudy',                  1,  4,  5,  5)
			],
			boss: {name:'Wizard of Cos',str:35,hp:400,gold:50,xp:673}},
			{class:'puddin',name:'Cosby Bebop',description:'Zwe bop boobity-dot sha-bot!',xp:10000,gold:5000,battles:105,level:200,pre:'the-wizard-of-cos',completed:0,
			mobs: [
				construct_mob('Jello Pudding', 15,  60,  45,  55),
				construct_mob('Pudding Pop',   15, 160, 450, 550)
			],
			boss: {name:'Zwe bop boobity-dot sha-bot!',str:45,hp:400,gold:5738,xp:63}},
			{class:'cosby',name:'To Cosby or Not to Cosby',description:'This isn\'t even my final form!',xp:100000,gold:50000,battles:10,level:200,pre:'puddin',completed:0,
			mobs: [
				construct_mob('Shadow Cosby', 35, 160,  45,  55),
				construct_mob('Cosby Pop',    30, 260,  35,  65),
				construct_mob('Cos-beat',     45, 130,  46, 373),
				construct_mob('Cosby',        10, 560, 435, 565)
			],
			boss: {name:'Cosby Prime',str:100,hp:100,gold:738,xp:663}},
			{class:'cosbesus',name:'Cosby Rising',description:'All hail the all powerful Cos!',xp:300000,gold:150000,battles:1,level:200,pre:'cosby',completed:0,
			mobs: [
				construct_mob('Bill Cosby', 35, 460, 458, 555)
			],
			boss: {name:'Billesus Coschrist',str:100,hp:1000,gold:7358,xp:6363}},


		// Revenge of the Slimes
			{class:'revenge',name:'Slime Attack!',description:'The town is being attacked by a Slime Army!',xp:600600,gold:606060,battles:40,level:2000,pre:'none',completed:0,
			mobs: [
				construct_mob('Slime Soldier',    50, 500, 525,  545),
				construct_mob('Slime Mage',       30, 300, 525,  545),
				construct_mob('Slime Berserker', 150, 100, 525,  545),
				construct_mob('Slime Captain',    50, 700, 525, 1545)
			],
			boss: {name:'6 Million Dollar Zombie True Slime King',str:150,hp:3000,gold:400,xp:1500,image:'6milliondollarzombietrueslimeking'}},
			{class:'re-revenge',name:'No More Slime',description:'Slimes are a virus upon the planet. Wipe them out to the last ooze!',xp:6006006,gold:6060606,battles:24000,level:2000,pre:'revenge',completed:0,
			mobs: [
				construct_mob('Slime Woman',   1, 1, 1, 1),
				construct_mob('Slime Child',   1, 1, 1, 1),
				construct_mob('Slime Citizen', 1, 1, 1, 1),
				construct_mob('Slime Elder',   1, 1, 1, 1)
			],
			boss: {name:'Mecha-Slime-God',str:150,hp:7000,gold:4000,xp:15000}},


		// DBZ
			{class:'dbz',name:'Collect the Dragon Balls',description:'Last time, Goku powered up for 3 episodes while Frieza acted like a vague homosexual stereotype!',xp:1000000,gold:500000,battles:50,level:9001,pre:'none',completed:0,
			mobs: [
				construct_mob('Carrot',    51, 1200, 350, 555),
				construct_mob('Vegetable', 40, 1500, 330, 330),
				construct_mob('Radish',    50, 1000, 250, 450),
				construct_mob('Cabbage',   20,  690, 150, 150),
				construct_mob('Broccoli',  66, 1000, 550,  50)
			],
			boss: {name:'Bardock',str:1,hp:1,gold:1,xp:1}},
			{class:'dbz-kai',name:'Too Weak',description:'That Bardock guy was so weak! Oh no!',xp:1000000,gold:500000,battles:100,level:9001,pre:'dbz',completed:0,
			mobs: [
				construct_mob('Borgos',  51, 1200, 350, 555),
				construct_mob('Fasha',   40, 1500, 330, 330),
				construct_mob('Onio',    50, 1000, 250, 450),
				construct_mob('Tarble',  20,  690, 150, 150),
				construct_mob('Shugesh', 66, 1000, 550, 750)
			],
			boss: {name:'Super Saiyan Bardock',str:100,hp:10000,gold:100000,xp:100000}},
			{class:'dbz-kai-kai',name:'You Smell Like TOENAILS!!!!',description:'They blew up the cargo helicopter!!!!',xp:1000000,gold:500000,battles:150,level:9001,pre:'dbz-kai',completed:0,
			mobs: [
				construct_mob('Saiba Mini Cells', 70, 3200, 3500, 5550)
			],
			boss: {name:'Kaio-ken Goku',str:9001,hp:100,gold:1000000,xp:1000000}},


		// Overleveled
			{class:'overleveled',name:'Overleveled',description:'This area right next to the starter area is stupidly hard',xp:100000,gold:50000,battles:1000,level:2,pre:'none',completed:0,
			mobs: [
				construct_mob('Metallic Dickmonster',                                      150,  400, 2050,  450),
				construct_mob('Priest Covered in Skulls',                                  100,  400, 5000,  650),
				construct_mob('Army of Lesser Monsters',                                   105,  800, 7005,  850),
				construct_mob('Dragon of Burning Ice-Lightning',                           103,  400, 5000,  750),
				construct_mob('Demon Jesus',                                               200,  666, 7045,  850),
				construct_mob('Potential Spoiler for Future Quests',                        60, 6666, 7045, 1850),
				construct_mob('Lord Fornicus and Kevin from <em>Cabin In The Woods</em>',   85,  250,  500,  500),
				construct_mob('Legendary Atma-Ruby-Emerald-Ultima-Crystal Weapon',        1000,   50, 5000,  650)
			],
			boss: {name:'Ungodly God of Unholy Hellfire with Spikes Protruding from the Groin',str:15,hp:100,gold:40,xp:150}},
		],
		current: 0,

		start: function(id){
			if(this.quests[id].completed == 0){
				this.current = this.quests[id];
				this.current.completed = -1;
				this.current.battlesStart = this.current.battles;
				view.update();
			}
		},

		complete: function(){
			this.current.completed = 1;
			player.xp += this.current.xp;
			player.gold += this.current.gold;
			view.history('<strong>Quest "'+this.current.name+'" completed! '+player.name+' has earned '+this.current.xp+' Xp and '+this.current.gold+' gold!<strong>');
			this.current = 0;
		},

		update: function(){
			var items = this.quests;
			for (k in items){
				// Ensure that quests with no more battles are also marked completed.
				if(items[k].completed == -1){
					quest.current = items[k];
				}
				if(items[k].battles < 0){
					items[k].completed = 1;
				}


				// Is the quest completed? Mark it so.
				if(items[k].completed == 1){
					$('.'+items[k].class).removeClass('click');
					$('.'+items[k].class).removeClass('progress');
					$('.'+items[k].class).addClass('complete');
				// Is it in progress?
				} else if(items[k].completed == -1){
					$('.'+items[k].class).removeClass('click');
					$('.'+items[k].class).removeClass('complete');
					$('.'+items[k].class).addClass('progress');
				} else {
					$('.'+items[k].class).addClass('click');
					$('.'+items[k].class).removeClass('complete');
					$('.'+items[k].class).removeClass('progress');
				}

				// Is the quest's prereq completed? Show this newly aquired quest!
				if($('.'+items[k].pre).val() >= 0 && items[$('.'+items[k].pre).val()].completed == 1){
					$('.'+items[k].class).fadeIn(250);
				}

				// Is the quest a starter quest? Show it! (Level of quest only matters for quest starters.)
				if(items[k].pre == 'none' && player.level >= items[k].level){
					$('.'+items[k].class).fadeIn(250);
				}
			}
		},

		initialize: function(){
			for (k in this.quests) {
				var item = this.quests[k];
				$('.quests').append('<li class="'+item.class+' click" value="'+k+'"><h3>'+item.name+'</h3><em>'+item.description+'</em></li>');
				$('.'+item.class+".click").on('click',function(){
					quest.start($(this).val());
				});
			}
		},
	}

	// Monster Object
	var monster = {
		current: 0,

		comes: function(){
			if(quest.current)
			{
				if(quest.current.battles > 0){
					this.current = JSON.parse(JSON.stringify(quest.current.mobs[Math.floor(Math.random() * quest.current.mobs.length)]));
					this.current.hpm = this.current.hp;
					this.current.alive = 1;
					if(this.current.image){
						$('.mob').attr('src', 'images/'+this.current.image+'.png');
						$('.mob').show();
					} else {
						$('.mob').hide();
					}
					view.history('<strong>A '+this.current.name+' arrives!<strong>');
				} else if(quest.current.battles == 0) {
					this.current = JSON.parse(JSON.stringify(quest.current.boss));
					this.current.hpm = this.current.hp;
					this.current.alive = 1;
					if(this.current.image){
						$('.mob').attr('src', 'images/'+this.current.image+'.png');
						$('.mob').show();
					} else {
						$('.mob').hide();
					}
					view.history('<strong>The '+this.current.name+' arrives!!!!<strong>');
				} else {
					quest.complete();
				}
				
			}
		},

		fight: function(){
			var loss = player.str;
			var old = this.current.hp;
			this.current.hp -= loss;
			if(this.current.hp < 0){
				this.current.hp = 0;
				loss = old;
			}
			view.history(player.name+' deals '+loss+' damage to '+this.current.name+', current hp is '+this.current.hp+'.','player');

			this.deathCheck();
		},

		deathCheck: function(noAttack){
			if(this.current.alive){
				if(this.current.hp <= 0 && player.HP > 0){
					$('.mob').hide();
					this.current.alive = 0;
					quest.current.battles--;
					var add = Math.floor(this.current.gold * (1 + (player.luck / 10)));
					player.gold += add;
					player.xp += Math.floor(this.current.xp * player.xpMod);
					view.history(player.name+' kills '+this.current.name+' and gains '+add+' gold and '+(Math.floor(this.current.xp * player.xpMod))+' Xp.');
					if(quest.current.battles < 0){
						quest.complete();
					}
				} else {
					if(noAttack != true){
						var dmg = this.current.str - player.armor;

						if(dmg < 1){
							dmg = 1;
						}

						player.HP -= dmg;
						if(player.HP < 0){
							player.HP = 0;
						}
						view.history(this.current.name+' deals '+dmg+' damage to '+player.name+', current hp is '+player.HP+'.', 'monster');
					}
				}
			}
		},
	}

	// Skill Object
	var skills = {
		items: [
			//{class:'',name:'',description:'',cost:n,inflation:n,limit:n,effect:function},
			{class:'get-fire',name:'Learn Fire',description:'A spell that deals Fire damage.',cost:5,inflation:1,limit:1,effect:function(i){
				$('.fire').fadeIn(250);
			}},
			{class:'get-heal',name:'Learn Heal',description:'A spell that heals 10% Hp.',cost:10,inflation:1,limit:1,effect:function(i){
				$('.heal').fadeIn(250);
			}},
			{class:'get-weaken',name:'Learn Weaken',description:'A spell that reduces monster damage.',cost:25,inflation:1,limit:1,effect:function(i){
				$('.weaken').fadeIn(250);
			}},


			{class:'hp-up',name:'Hp Up',description:'Increase Hp by 10',cost:1,inflation:1.01,limit:-1,effect:function(i){
				player.HPM += 10;
			}},
			{class:'mp-up',name:'Mp Up',description:'Increase Mp by 5',cost:1,inflation:1.1,limit:-1,effect:function(i){
				player.MPM += 5;
			}},
			{class:'str-up',name:'Str Up',description:'Increase Attack by 1',cost:10,inflation:1.5,limit:-1,effect:function(i){
				player.str += 1;
			}},
			{class:'int-up',name:'Int Up',description:'Increase Magic Power by 1',cost:10,inflation:1.5,limit:-1,effect:function(i){
				player.intel += 1;
			}},


			{class:'xp-boost',name:'Xp Boost',description:'Increase passive Xp gained by 1 Xp per second.',cost:5,inflation:1.1,limit:-1,effect:function(i){
				player.XPS += 1;
			}},
			{class:'sp-boost',name:'Sp Boost',description:'Increase Skill Points gained per level by 1.',cost:10,inflation:2,limit:-1,effect:function(i){
				player.SPS++;
			}},
			{class:'gold-boost',name:'Gold Boost',description:'Increase gold gain by 10%.',cost:15,inflation:2,limit:10,effect:function(i){
				player.luck++;
			}},


			{class:'adrenaline-rush',name:'Adrenaline Rush',description:'Permanently decreases the amount of Xp needed to gain a level. (takes effect at next level up)',cost:3,inflation:3,limit:100,effect:function(i){
				player.growthMod += 0.2;
			}},
			{class:'haste',name:'Haste',description:'Increase all Xp gained by 10%.',cost:10,inflation:10,limit:10,effect:function(i){
				player.xpMod += 0.1;
			}},
		],

		update: function(){
			var items = this.items;
			$('.skills-list li').each(function(){
				if(items[$(this).val()].cost <= player.skillPoints && items[$(this).val()].limit != 0){
					$(this).fadeIn(250);
				}
			});
		},

		learn: function(k){
			var item = this.items[k];
			if(player.skillPoints >= item.cost){
				player.skillPoints -= item.cost;
				item.cost = Math.ceil(item.cost * item.inflation);
				$('.'+item.class+' .cost').html(nn(item.cost)+' Sp');
				item.effect(item);
				item.limit--;
				if(item.limit == 0){
					$('.'+item.class).fadeOut(250,function(){
						$(this).remove();
					});
				}
				view.update();
			}
		},

		initialize: function(){
			for (k in this.items) {
				var item = this.items[k];
				$('.skills-list').append('<li class="'+item.class+'" value="'+k+'"><h3>'+item.name+'</h3><em>'+item.description+'</em><strong class="cost">'+nn(item.cost)+' Sp</strong></li>');
				$('.'+item.class).on('click',function(){
					skills.learn($(this).val());
				});
			}
		},
	}

	// Store Object
	var store = {
		items: [
			//{class:'',name:'',description:'',cost:n,inflation:n,limit:n,effect:function},
			{class:'better-weapon',name:'Better Weapon',description:'Increase Attack by 1',cost:50,inflation:3.5,limit:-1,effect:function(i){
				player.str += 1;
			}},
			{class:'better-armor',name:'Better Armor',description:'Increase Armor by 1',cost:75,inflation:3.5,limit:-1,effect:function(i){
				player.armor += 1;
			}},


			{class:'potion',name:'Potion',description:'Regain 10 Hp',cost:5,inflation:1.000001,limit:-1,effect:function(){
				var gain = 10;
				player.HP += gain;
				if(player.HP > player.HPM){
					gain -= player.HP - player.HPM;
					player.HP = player.HPM;
				}
				view.history(player.name+' has used a Potion to regain '+gain+' Hp.', 'item');
			}},


			{class:'skill-training',name:'Skill Training',description:'Instantly gain some skill points.',cost:10,inflation:2,limit:-1,effect:function(i){
				player.skillPoints += Math.abs(i.limit);
			}},



			// {class:'dev',name:'Dev Cheat',description:'Cheating',cost:1,inflation:1,limit:100,effect:function(i){
			// 	player.XPS += 1000;
			// }},
		],

		update: function(){
			var items = this.items;
			$('.store-list li').each(function(){
				if(items[$(this).val()].cost <= player.gold && items[$(this).val()].limit != 0){
					$(this).fadeIn(250);
				}
			});
		},

		buy: function(k){
			var item = this.items[k];
			if(player.gold >= item.cost){
				player.gold -= item.cost;
				item.cost = Math.ceil(item.cost * item.inflation);
				$('.'+item.class+' .cost').html(nn(item.cost)+' Gold');
				item.effect(item);
				item.limit--;
				if(item.limit == 0){
					$('.'+item.class).fadeOut(250,function(){
						$(this).remove();
					});
				}
				view.update();
			}
		},

		initialize: function(){
			for (k in this.items) {
				var item = this.items[k];
				$('.store-list').append('<li class="'+item.class+'" value="'+k+'"><h3>'+item.name+'</h3><em>'+item.description+'</em><strong class="cost">'+nn(item.cost)+' Gold</strong></li>');
				$('.'+item.class).on('click',function(){
					store.buy($(this).val());
				});
			}
		},
	}

	// Magic Object
	var magic = {
		cooldown: 0,
		items: [
			//{class:'',name:'',description:'',cost:n,inflation:n,limit:n,attack:t/f,effect:function},
			{class:'heal',name:'Heal',description:'Regain 10% Hp',cost:11,inflation:1,limit:-1,attack:false,effect:function(){
				var gain = Math.floor(player.HPM/10) + player.intel;
				player.HP += gain;
				if(player.HP > player.HPM){
					gain -= player.HP - player.HPM;
					player.HP = player.HPM;
				}
				view.history(player.name+' has used a Heal spell to regain '+gain+' Hp.', 'spell');
			}},
			{class:'fire',name:'Fire',description:'Deal Fire damage to the current enemy.',cost:5,inflation:1,limit:-1,attack:true,effect:function(){
				if(monster.current && monster.current.alive){
					var loss = 4 * player.intel;
					monster.current.hp -= loss;
					if(monster.current.hp < 0){
						loss += monster.current.hp;
						monster.current.hp = 0;
					}
					if(loss < 0){
						loss = 0;
					}
					view.history(player.name+' cast Fire on '+monster.current.name+' dealing '+loss+' Fire damage.', 'spell');
					monster.deathCheck(true);
				}
			}},
			{class:'weaken',name:'Weaken',description:'Make the enemy deal less damage!',cost:15,inflation:1,limit:-1,attack:true,effect:function(){
				if(monster.current && monster.current.alive){
					monster.current.str = Math.floor(monster.current.str * 0.9);
					view.history(player.name+' cast Weaken on '+monster.current.name+' reducing it\'s damage.', 'spell');
				}
			}},
		],

		cast: function(k){
			if(quest.cooldown == 0)
			{
				quest.cooldown = 1;
				var item = this.items[k];
				if(player.MP >= item.cost){
					if(player.location == "battle" || item.attack == false){
						player.MP -= item.cost;
						item.cost = Math.ceil(item.cost * item.inflation);
						$('.'+item.class+' .cost').html(nn(item.cost)+' Mp');
						item.effect(item);
						item.limit--;
						if(item.limit == 0){
							$('.'+item.class).fadeOut(250,function(){
								$(this).remove();
							});
						}
						view.update();
					}
				}
			}
		},

		update: function(){
			quest.cooldown = 0;
		},

		initialize: function(){
			for (k in this.items) {
				var item = this.items[k];
				$('.magic-list').append('<li class="'+item.class+'" value="'+k+'"><h3>'+item.name+'</h3><em>'+item.description+'</em><strong class="cost">'+nn(item.cost)+' Mp</strong></li>');
				$('.'+item.class).on('click',function(){
					magic.cast($(this).val());
				});
			}
		},
	}

	// 1 Second Polling
	setInterval(function(){
		player.step();
		view.update();
		magic.update();
	},1000);

	// 1 Minute Polling
	setInterval(function(){
		data.save();
	},1000*60);

	// 1 Hour Polling
	setInterval(function(){
		$.get('new-version.txt', function(d){
			if(data.versionData != d){
				$('.new-version').fadeIn(250);
			}
		});
	},1000*60*60);

	// Initializers
	store.initialize();
	skills.initialize();
	magic.initialize();
	quest.initialize();
	data.load();

});