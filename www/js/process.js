let process = {
	menu:function(){
		// let source_vid = 'https://www.youtube.com/watch?v=d-P7YUSKbpQ';
		    // <iframe src={source_vid} width="100%" height='300px'/>
		let content = <div>
		<p><center> Mga Bayani ng Bansang Pilipinas  </center></p>
			<ul><center>
				<li><a href='#' onClick={process.jose}> Jose Rizal </a></li>
				<li><a href='#' onClick={process.andres}> Andres Bonifacio </a></li>
				<li><a href='#' onClick={process.gregorio}> General Gregorio del Pilar </a></li>
				<li><a href='#' onClick={process.emilio}> General Emilio Aguinaldo </a></li>
				<li><a href='#' onClick={process.mabini}> Apolonario Mabini </a></li>
				<li><a href='#' onClick={process.luna}> General Antonio Luna </a></li>
				<li><a href='#' onClick={process.lopez}> Graciano Lopez-Jaena </a></li>
				<li><a href='#' onClick={process.aquino}> Melchora Aquino </a></li>
				<li><a href='#' onClick={process.juan}> Juan Luna </a></li>
				<li><a href='#' onClick={process.pilar}> Marcelo del Pilar </a></li>
				<li><a href='#' onClick={process.diego}> Diego Silang </a></li>
				<li><a href='#' onClick={process.gabriela}> Maria Josefa Gabriela Silang </a></li>
				<li><a href='#' onClick={process.lapu}> Lapu-lapu </a></li>
				<li><a href='#' onClick={process.baltazar}> Francisco Baltazar </a></li>
				<li><a href='#' onClick={process.jacinto}> Emilio Jacinto </a></li>
				</center>
			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	jose:function(){
		let content = <div>
				
				<img src='img/jose.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>

<br/> 1861-1896
<br/>  The Philippines' national hero. Born in Calamba, Laguna, on June 19, 1861. Published his masterpiece Noli Me Tangere in Berlin(Germany) in 1887 and his second novel El Filibusterismo in Ghent(Belgium) in 1891. His two novels stirred the conscience of his people. He contributed various literary works to La Solidaridad. For his leadership in the reform movement and for his incendiary novels, Rizal was arrested and later killed by musketry in Bagumbayan, Manila, on December 30, 1896. His execution was the last straw for other Filipinos who called for a bloody revolution against Spain.
 
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
},

	andres:function(){
		let content = <div>
				<img src='img/andres.jpg' width='100%'/>
				<a href='#' className='btn-back' onClick={process.menu}>back</a>

<br/>	(1863-1897)
<br/> He founded the secret society, Katipunan, on July 7, 1892, to fight Spain. He was also president of the Tagalog republic from August 24, 1896 to May 10, 1897. Born in Tondo, Manila, on November 30, 1863. He grew up in the slums and never knew the benefits of a prosperous life. He married Gregoria de Jesus in 1892. He was killed on May 10, 1897, near Mount Buntis, Maragondon, Cavite.


			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},
	
	gregorio:function(){
		let content = <div>
				
		<img src='img/gregorio.jpg' width='100%' />
		<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/> (1875-1899)
<br/> Hero of Tirad Pass. Born on November 14, 1875, in Bulacan, Bulacan. Died on December 2, 1899, in the battle of Tirad Pass, to enable Aguinaldo to escape from the Americans. One of the youngest and bravest generals ever produced by the Philippines.
	

			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	},
	emilio:function(){
		let content = <div>
				
				<img src='img/emilio.jpg' width='100%' />
				<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/> (1899-1964)
<br/> He officially proclaimed the Philippine independence in Malolos, Bulacan, on January 23, 1899, with him as the first president. It was the first republic in Asia. Born in Kawit, Cavite, on March 22, 1869. Died at the Veterans Memorial Hospital, Quezon City, on February 6, 1964.

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},
		mabini:function(){
		let content = <div>
				
				<img src='img/apolinario.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/> 1864-1903
<br/>  Sublime paralytic and the brain of the revolution. Born in Talaga, Tanauan, Batangas, on June 22, 1864. He joined La Liga Filipina in 1892 and Aguinaldo's revolutionary government from June 1898 to May 1899. He was captured by the American forces in December 1899 and deported to Guam in January 1901. He died in Manila on May 13, 1903.
 
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
},

luna:function(){
		let content = <div>
				
				<img src='img/antonio.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/> 1866-1899
<br/>  The greates general of the revolution. Younger brother of juan Luna, the famous painter. Editor o La Independencia, whose first issue came out on September 3, 1898. Born in Binon, Manila, on October 29, 1866. He was one of the propagandists in Spain who were working for piliticalreforms in the Philippines. He contributed articles to La Solidaridad. He assassinated in Cabanatuan City, on June 5, 2899.
 
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
},

lopez:function(){
		let content = <div>
				
				<img src='img/lopez.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/>1856-1896
<br/>  Founder and first editor of the newspaper La Solidaridad, which became the vehicle of expression for Filipino propaganda in Spain. Together wtih Jose Rizal and Marcelo H. Del Pilar, he undertook propaganda campaigns in Spain. Born in Jaro, Iloilo, on December 18, 1856. He died on January 20, 1896, in Barcelona, Spain.
 
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
},

aquino:function(){
		let content = <div>
				
				<img src='img/aquino.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/>1812-1919
<br/>  Better known as Tandang Sora. Born in Banlat, Kalookan City, on January 6, 1812. She helped the Katipuneros under the leadership of Andres Bonifacio by providing them food, shelter, and other material goods. She is recognized as the Grand Woman of the revolution and the Mother of Balintawak. She died on March 12, 1919.
 
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
},

juan:function(){
		let content = <div>
				
				<img src='img/juan.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/>1857-1899
<br/>  A genius of the brush and a patriot of the highest order. Creator of the world-famous painting, SPOLARIUM, which was awarded the gold medal in the Exposicion Nacional de Bellas Artes in Madrid in 1884. It is also known as the greatest painting of all times. Born in Badoc, Ilocos, Norte, on October 23, 1857. He was closely associated with the Reform Movement, together with Rizal, Lopez-Jaena, Ponce, etc. He died in Hongkong on December 7, 1899.
 
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
},

pilar:function(){
		let content = <div>
				
				<img src='img/pilar.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/>1850-1896
<br/>  Political analyst of the Filipino colony in Spain. Born in Kupang, Bulacan, Bulacan, on August 30, 1850. In 1882, he founded the nationalistic newspaper, Diariong Tagalog. In December 1889, he became the editor of La Solidaridad and became the moving spirit behind the propaganda movement. Died on July 4, 1896.
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
},

diego:function(){
		let content = <div>
				
				<img src='img/diego.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/>1730-1763
<br/> He led the revolt of the Ilocanos in opposition to the tribute and abuses of the Spanish officials. Born in Aringay, La Union, on December 16, 1730. The revolt started in Vigan, Ilocos Sur. He was killed by Miguel Vicos, a Spanish mestizo who bore grievances against Diego Silang.
 
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
},


gabriela:function(){
		let content = <div>
				
				<img src='img/gabriela.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/>  After the death of Diego Silang on May 28, 1763, the fight was carried on by his wife, MARIA JOSEFA GABRIELA SILANG, and his uncle, Nicolas Cariño. She too lost her life for freedom's sake on September 30, 1763.
 
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
},

lapu:function(){
		let content = <div>
				
				<img src='img/lapu.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/>c. 16th century
<br/>  Chief of Mactan who led the first successful Filipino armed resistance against Spanish aggression. He fought and killed Magellan in a battle in Mactan, on April 27, 1521.
 
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
},

makabulos:function(){
		let content = <div>
				
				<img src='img/jose.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/>1788-1862
<br/> More popularly known as Balagtas, he is considered the prince of Tagalog poets. Born in Panginay, Bigaa, Bulacan, on April 2, 1788. He wrote Florante at Laura, a masterpiece of local versification, upholding moral and social values; it served as the basic foundation of the Philippine literature. Died in Orion, Bataan, on February 20, 1862.
 
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
},
jacinto:function(){
		let content = <div>
				
				<img src='img/jacinto.jpg' width='100%' />
				<a href='#' className='btn-back' onClick={process.menu}>back</a>
<br/>1875-1899
<br/>  Brain of the Katipunan. Born in Trozo, Manila, on December 15, 1875. He joined the Katipunan in 1894 and became Bonifacio's trusted friend and advicer. He wrote the Kartilya ng Katipunan, theprimer of the Katipunan which embodied the teachings of the organization. He founded and edited the Katipunan newspaper; Kalayaan, whose first issue came out in January 1896. Died on April 16, 1899. He was one of the heroic figures in the Phillipine history.
 
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
},
	loading:function(){
		let content = <div>
					<div className="progressbar-infinite"></div>
					<audio id="audio">
						<source src="audio/LP.mp3" type="audio/mp3" />
					</audio>
					<div align='center'>
						<img src='img/image2.png' width='100px' />
						<p> The past is behind, learn from it. The future is ahead, prepare for it. The persent is here, live it.     Thomas S. Monson</p>




						Loading...
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	
	process.menu();
},5000);