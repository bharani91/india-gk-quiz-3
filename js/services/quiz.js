'use strict';

/* Services */


angular.module('App.services')
.factory("Quiz", ["$http", function($http) {
    var data = [

        {
            "options": [
                "Assam",
                "Orissa",
                "West Bengal",
                "Karnataka"
            ],
            "question": "Which Indian state is the largest producer in the world of the golden coloured 'Muga' silk ? ",
            "answer": 0
        }, {
            "options": [
            "Bal Gangadhar Tilak",
            "Jai Prakash Narain",
            "Gopal Hari Deshmukh",
            "Madan Mohan Malaviya"
            ],
            "question": "Which Indian freedom fighter was popularly called 'Mahamana' ? ",
            "answer": 3
        }, {
            "options": [
            "Karnataka",
            "Maharashtra",
            "Tamil Nadu",
            "Andhra Pradesh"
            ],
            "question": "Which Indian state would you be in if you were watching birds at Ranganathittu Birds Sanctuary, situated on an island in the Kaveri river ? ",
            "answer": 0
        }, {
            "options": [
            "Rabindranath Tagore",
            "Sharat Chandra Chatterjee",
            "Bankim Chandra Chatterjee",
            "Bibhuti Bhushan Bandopadhyay"
            ],
            "question": "'Anandmath', 'Durgeshnondini' and 'Kapalkundala' novels were authored by which Bengali writer ? ",
            "answer": 2
        }, {
            "options": [
            "Beas",
            "Chenab",
            "Jhelum",
            "Sutlej"
            ],
            "question": "Baglihar Dam, also known as Baglihar Hydroelectric Power Project, in Jammu  Kashmir is built across which river ? ",
            "answer": 1
        }, {
            "options": [
            "Kolkata",
            "Bengaluru",
            "Ahmedabad",
            "Lucknow"
            ],
            "question": "Where was the first Indian Institute of Management (IIM) established in 1961 ? ",
            "answer": 0
        }, {
            "options": [
            "Isobar",
            "Isohel",
            "Isotherm",
            "Isohyet"
            ],
            "question": "What line connects the points on a map that receive equal amounts of rainfall ? ",
            "answer": 3
        }, {
            "options": [
            "France",
            "Israel",
            "Russia",
            "Germany"
            ],
            "question": "On 28 May 2008, the Indian Air Force attained the Airborne Warning And Control System (AWACS) capability by procuring the Phalcon radar (mounted on Russian plane IL-76) from which country ? ",
            "answer": 1
        }, {
            "options": [
            "C.V. Raman",
            "Satyendra Nath Bose",
            "Homi J. Bhabha",
            "Narinder Singh Kapany"
            ],
            "question": "Which India born physicist invented the 'Optical Fibre' ? ",
            "answer": 3
        }, {
            "options": [
            "Victoria",
            "Queensland",
            "Tasmania",
            "New South Wales"
            ],
            "question": "Which Australian state was formerly known as \"Van Diemen's Land\" ? ",
            "answer": 2
        }, {
            "options": [
            "Sodium",
            "Protein",
            "Iodine",
            "Vitamin D"
            ],
            "question": "'Marasmus' and 'Kwashiorkor' diseases are caused due to deficiency of which nutrient ?",
            "answer": 1
        }, {
            "options": [
            "Ghum monastery (West Bengal)",
            "Rumtek monastery (Sikkim)",
            "Twang monastery (Arunachal Pradesh)",
            "Kursha monastery (Jammu  Kashmir)"
            ],
            "question": "Which among the following is the largest Buddhist monastery in India ?",
            "answer": 2
        }, {
            "options": [
            "Goa",
            "Mizoram",
            "Tripura",
            "Kerala"
            ],
            "question": "According to 2001 cencus, which state has the highest literacy rate ?",
            "answer": 3
        }, {
            "options": [
            "Tennis",
            "Squash",
            "Table Tennis",
            "Badminton"
            ],
            "question": "'Ace', 'Double fault', 'Smash', Second service', and 'Game point' terms are related with which sport ?",
            "answer": 0
        }, {
            "options": [
            "Mussoorie (Uttarakhand)",
            "Mount Abu (Rajasthan)",
            "Darjeeling (West Bengal)",
            "Kodaikanal (Tamil Nadu)"
            ],
            "question": "Where is the Lal Bahadur Shastri National Academy of Administration, the apex training institution for senior members of the civil services in India, located ?",
            "answer": 0
        }, {
            "options": [
            "Pampas of Argentina",
            "Prairies of North America",
            "Savannas of Africa",
            "Steppes of Russia"
            ],
            "question": "Which among the following grassland region is also known as the \"World's Breadbasket\" ?",
            "answer": 1
        }, {
            "options": [
            "Jaimini",
            "Gautam",
            "Kapil Muni",
            "Patanjali"
            ],
            "question": "Which ancient Indian sage authored the 'Yog Darshan' ?",
            "answer": 3
        }, {
            "options": [
            "Yangon (Myanmar)",
            "Hanoi (Vietnam)",
            "Jakarta (Indonesia)",
            "Beijing (China)"
            ],
            "question": "Which Asian city was formerly known as 'Batavia' ?",
            "answer": 2
        }, {
            "options": [
            "Aryabhatta",
            "Medhatithi",
            "Brahmagupta",
            "Bhaskaracharya"
            ],
            "question": "Which seventh century Indian mathematician was the first in the world to treat 'zero' as a number and show its mathematical operations ?",
            "answer": 2
        }, {
            "options": [
            "Tokyo (Japan)",
            "Vienna (Austria)",
            "Geneva (Switzerland)",
            "New York (USA)"
            ],
            "question": "Which city houses the headquarters of International Atomic Energy Agency (IAEA), the world's 'Atoms for Peace' organisation set up in 1957 within the United Nations family ?",
            "answer": 1
        }, {
            "options": [
            "Surat (1907)",
            "Belgaum (1924)",
            "Lahore (1929)",
            "Tripuri (1939)"
            ],
            "question": "Which was the only session of Indian National Congress (INC) presided over by Mahatma Gandhi ? ",
            "answer": 1
        }, {
            "options": [
            "Karnataka",
            "Madhya Pradesh",
            "Maharashtra",
            "Andhra Pradesh"
            ],
            "question": "Which state is the largest producer of tobacco ? ",
            "answer": 3
        }, {
            "options": [
            "England",
            "New Zealand",
            "Australia",
            "South Africa"
            ],
            "question": "For Border-Gavaskar Trophy, the Indian cricket team plays against which country ? ",
            "answer": 2
        }, {
            "options": [
            "Madurai (Tamil Nadu)",
            "Haridwar (Uttarakhand)",
            "Bhubaneswar (Orissa)",
            "Varanasi (Uttar Pradesh)"
            ],
            "question": "On account of its numerous temples, which city is also known as the 'Cathedral City of India' ? ",
            "answer": 2
        }, {
            "options": [
            "Sikkim",
            "Haryana",
            "Gujarat",
            "Tamil Nadu"
            ],
            "question": "Which Indian state does not have any scheduled tribe community ? ",
            "answer": 1
        }, {
            "options": [
            "Azerbaijan",
            "Kazakhstan",
            "Kyrgyzstan",
            "Uzbekistan"
            ],
            "question": "Baku is the capital city of which country ? ",
            "answer": 0
        }, {
            "options": [
            "Sunderban",
            "Leh and Ladakh",
            "Coromandel",
            "Rann of Kachchh"
            ],
            "question": "Which Indian region is the only place in the world where the Asiatic Wild Ass is found ? ",
            "answer": 3
        }, {
            "options": [
            "Sandeep Pandey",
            "Lakshmi Chand Jain",
            "Pandurang Shastri Athavale",
            "Mahesh Chandra Mehta"
            ],
            "question": "Which Ramon Magsaysay award winner founded the 'Asha for Education', a secular organisation dedicated to bring socio-economic change in India by focusing on basic education ? ",
            "answer": 0
        }, {
            "options": [
            "Bodh Gaya (Bihar)",
            "Sarnath (Uttar Pradesh)",
            "Kushinagar (Uttar Pradesh)",
            "Nagpur (Maharashtra)"
            ],
            "question": "In which city would you come across 'Deeksha Bhoomi', where Dr. Babasaheb Ambedkar had embraced Buddhism along with thousand of his Dalit followers on 14 October 1956 ? ",
            "answer": 3
        }, {
            "options": [
            "Kalidas",
            "Bhavabhuti",
            "Banabhatta",
            "Vishakhadatta"
            ],
            "question": "Who authored ancient Sanskrit plays 'Malti Madhava', 'Mahavircharita' and 'Uttar Ramcharita' ? ",
            "answer": 1
        }, {
            "options": [
            "Twenty-20",
            "One Day Intl. (ODI)",
            "Test Match",
            "both Twenty-20  One day Intl. (ODI)"
            ],
            "question": "For the first time, Cricket has been included in Asian Games to be held in 2010. Which format ? ",
            "answer": 0
        }, {
            "options": [
            "Krishna",
            "Kaveri",
            "Mahanadi",
            "Godavari"
            ],
            "question": "Nagarjunasagar Dam in Andhra Pradesh is built across which river ? ",
            "answer": 0
        }, {
            "options": [
            "Australia",
            "United Kingdom",
            "Switzerland",
            "South Africa"
            ],
            "question": "Which country is also known as the 'Rainbow Nation' ? ",
            "answer": 3
        }, {
            "options": [
            "Agra (Uttar Pradesh)",
            "Ahmedabad (Gujarat)",
            "Hyderabad (Andhra Pradesh)",
            "Srinagar (Jammu  Kashmir)"
            ],
            "question": "In which city would you come across Sidi Bashir Mosque, famous for its Shaking Minarets (Jhulta Minar) ? ",
            "answer": 1
        }, {
            "options": [
            "Kerala",
            "Tamil Nadu",
            "Karnataka",
            "Andhra Pradesh"
            ],
            "question": "The weapon based Dravidian martial art 'Silambam' is native of which south Indian state ? ",
            "answer": 1
        }, {
            "options": [
            "Gregor Mendel",
            "James Chadwick",
            "Dmitri Mendeleev",
            "Ernest Rutherford"
            ],
            "question": "Who is generally considered as the inventor of the 'Periodic Table', a tabular method of displaying the chemical elements ? ",
            "answer": 2
        }, {
            "options": [
            "Kiran Desai",
            "Jhumpa Lahiri",
            "Manjula Padmanabhan",
            "Arundhati Roy"
            ],
            "question": "Which Indian lady writer authored Onasis award winning play 'Harvest', highlighting the controversial issue of organ trading in poverty-stricken areas ? ",
            "answer": 2
        }, {
            "options": [
            "Copper",
            "Lignite",
            "Bauxite",
            "Thorium"
            ],
            "question": "Which mineral is found at Aluva and Chavara in Kerala, Manavalakurichi in Tamil Nadu and Chatrapur in Orissa ? ",
            "answer": 3
        }, {
            "options": [
            "Andrew Waugh",
            "George Everest",
            "Nain Singh Rawat",
            "Radhanath Sikdar"
            ],
            "question": "Who was the first person to calculate the height of the Mount Everest ? ",
            "answer": 3
        }, {
            "options": [
            "Namibia",
            "Lesotho",
            "Ethiopia",
            "Botswana"
            ],
            "question": "Which African country was formerly known as 'Abyssinia' ? ",
            "answer": 2
        }, {
            "options": [
            "Common salt",
            "Epsom salt",
            "Baking soda",
            "Caustic soda"
            ],
            "question": "What is the popular name of Magnesium Sulphate, a white crystalline salt used in medicine and in leather processing ? ",
            "answer": 1
        }, {
            "options": [
            "President",
            "Prime Minister",
            "Rajya Sabha Deputy Speaker",
            "Lok Sabha Speaker"
            ],
            "question": "To whom does the Vice President of India address his resignation ? ",
            "answer": 0
        }, {
            "options": [
            "Orissa",
            "West Bengal",
            "Tamil Nadu",
            "Andhra Pradesh"
            ],
            "question": "Paradip port, a major port on the Bay of Bengal, is located in which Indian state ? ",
            "answer": 0
        }, {
            "options": [
            "Penicillin",
            "DNA structure",
            "Synthetic Antigens",
            "Malaria germs"
            ],
            "question": "What discovery was made by biologist duo James D. Watson (US) and Francis Crick (UK) in 1953 ? ",
            "answer": 1
        }, {
            "options": [
            "10 Kgs",
            "12 Kgs",
            "15 Kgs",
            "20 Kgs"
            ],
            "question": "Under Annapurna Scheme by Central Government, how much food grain (wheat or rice) per month is given free to senior citizens (65 years or above age), who though eligible but remained uncovered under the National Old Age Pension Scheme (NOAPS)?",
            "answer": 0
        }, {
            "options": [
            "Lord Mayo",
            "Lord Irwin",
            "Lord Rippon",
            "Lord Curzon"
            ],
            "question": "The Ilbert Bill, by which Indian judges were allowed to try the European offenders in criminal cases, was introduced by which Governor-General of India in 1883 ? ",
            "answer": 2
        }, {
            "options": [
            "Maruti Cars",
            "HMT Tractors",
            "Tejas Aircrafts",
            "Arjun Tanks"
            ],
            "question": "Which among the following is manufactured at Avadi (abbreviation for 'Armoured Vehicles and Ammunition Depot of India') town in Tamilnadu ? ",
            "answer": 3
        }, {
            "options": [
            "New York",
            "Washington",
            "San Francisco",
            "Los Angeles"
            ],
            "question": "Which US city is popularly known as the 'City of the Golden Gate' ? ",
            "answer": 2
        }, {
            "options": [
            "Amartya Sen",
            "Rudyard Kipling",
            "V.S. Naipaul",
            "Rabindranath Tagore"
            ],
            "question": "Which Nobel laureate authored the novel 'A House for Mr. Biswas' ? ",
            "answer": 2
        }, {
            "options": [
            "Simlipal National Park (Orissa)",
            "Kanha National Park (Madhya Pradesh)",
            "Ranthambhore National Park (Rajasthan)",
            "Corbett National Park (Uttarakhand)"
            ],
            "question": "Where was the 'Project Tiger', the tiger protection programme, launched on 1 April 1973 ? ",
            "answer": 3
        }, {
            "options": [
            "Chandrashekhar",
            "Morarji Desai",
            "Atal Bihari Vajpayee",
            "Vishwanath Pratap Singh"
            ],
            "question": "'Zindagi Ka Karvan' book is an autobiography of which former Prime Minister of India ? ",
            "answer": 0
        }, {
            "options": [
            "Manipur",
            "Meghalaya",
            "Arunachal Pradesh",
            "Nagaland"
            ],
            "question": "Which Indian state was originally known as the North East Frontier Agency (NEFA) ? ",
            "answer": 2
        }, {
            "options": [
            "Anemometer",
            "Hygrometer",
            "Galvanometer",
            "Spectrometer"
            ],
            "question": "Which among the following instrument is used for maesuring wind speed ? ",
            "answer": 0
        }, {
            "options": [
            "Strait of Malacca",
            "Strait of Magellan",
            "Strait of Gibraltar",
            "Strait of Hormuz"
            ],
            "question": "Which strait connects the Pacific Ocean to the Atlantic Ocean ? ",
            "answer": 1
        }, {
            "options": [
            "Indira Gandhi Award",
            "Nargis Dutt Award",
            "Swarna Kamal (Golden Lotus)",
            "Rajat Kamal (Silver Lotus)"
            ],
            "question": "Which national film award is given to the 'Best Feature Film on National Integration' ? ",
            "answer": 1
        }, {
            "options": [
            "Okha",
            "Kandla",
            "Alang",
            "Veraval"
            ],
            "question": "Which coastal town in Gujarat is world famous for its ship-breaking industry ? ",
            "answer": 2
        }, {
            "options": [
            "Hockey",
            "Tennis",
            "Badminton",
            "Cricket"
            ],
            "question": "In which sport do sportswoman Jhulan Goswami, Mithali Raj, Anjum Chopra, Rumeli Dhar and Amita Sharma represent India ? ",
            "answer": 3
        }, {
            "options": [
            "Iron",
            "Silicon",
            "Oxygen",
            "Aluminium"
            ],
            "question": "In the Earth's crust, which chemical element has the largest share of 47 percent in terms of weight ? ",
            "answer": 2
        }, {
            "options": [
            "Battle of Buxar (1764)",
            "Battle of Plassey (1757)",
            "Battle of Surat (1664)",
            "Battle of Gujarat (1849)"
            ],
            "question": "In which battle, fought near the banks of Chenab river, did the British Army decisively defeat Sikh Army and annex the Sikh Kingdom of the Punjab to the British Empire ? ",
            "answer": 3
        }, {
            "options": [
            "Sandeep Pandey",
            "Rajendra Singh",
            "Mahesh Chandra Mehta",
            "Arvind Kejriwal"
            ],
            "question": "Which Ramon Magsaysay Award winner, popularly known as Water Man, founded an NGO called 'Tarun Bharat Sangh' near Alwar in Rajasthan to work on watershed projects  rain-water harvesting ? ",
            "answer": 1
        }, {
            "options": [
            "Pune, Nasik and Aurangabad",
            "Panaji (Goa), Pune and Nagpur",
            "Aurangabad, Nagpur and Pune",
            "Panaji (Goa), Aurangabad and Nagpur"
            ],
            "question": "In addition to main Bombay Bench, where are the three other benches of Bombay High Court located ? ",
            "answer": 3
        }, {
            "options": [
            "Lotology",
            "Philately",
            "Numismatics",
            "Philography"
            ],
            "question": "What name is given to the study or collection of money, coins or often medals ? ",
            "answer": 2
        }, {
            "options": [
            "Running",
            "Cycling",
            "Long Jump",
            "Swimming"
            ],
            "question": "Which among the following is not a part of the 'Triathlon', an athletic event combining three sporting events ? ",
            "answer": 2
        }, {
            "options": [
            "Laos",
            "Brunei",
            "Vietnam",
            "Taiwan"
            ],
            "question": "'Bandar Seri Begawan' is the capital city of which Asian country ? ",
            "answer": 1
        }, {
            "options": [
            "Copper sulphate",
            "Silver bromide",
            "Calcium carbide",
            "Calcium sulphate"
            ],
            "question": "Which among the following chemical is used in photography ? ",
            "answer": 1
        }, {
            "options": [
            "Hisar (Haryana)",
            "Mathura (Uttar Pradesh)",
            "Bikaner (Rajasthan)",
            "Dirang (Arunachal Pradesh)"
            ],
            "question": "In which city is the Central Institute for Research on Buffaloes located ? ",
            "answer": 0
        }, {
            "options": [
            "P.C. Lal",
            "Arjan Singh",
            "S. Mukherjee",
            "A.M. Engineer"
            ],
            "question": "On 1 April 1954, who became the first Indian Chief of the Indian Air Force (IAF) ? ",
            "answer": 2
        }, {
            "options": [
            "Himachal Pradesh",
            "West Bengal",
            "Arunachal Pradesh",
            "Andaman  Nicobar Islands"
            ],
            "question": "In which Indian state, do the people of the Gaddis tribe live ? ",
            "answer": 0
        }, {
            "options": [
            "Vijay Amritraj  Anand Amritraj",
            "Jaideep Mukherjee  Premjit Lall",
            "Ramesh Krishnan  Zeeshan Ali",
            "Mahesh Bhupathi  Leander Paes"
            ],
            "question": "Which Indian tennis player duo, the first men's doubles pair to reach the finals of all four Grand Slam tennis tournaments in Open era, is popularly called 'Indian Express' ? ",
            "answer": 3
        }, {
            "options": [
            "Annie Besant",
            "Indira Gandhi",
            "Nellie Sengupta",
            "Sarojini Naidu"
            ],
            "question": "Which lady freedom fighter, who once served as Congress president, authored collection of poems 'The Golden Threshold', 'The Bird of Time' and 'The Broken Wing' ? ",
            "answer": 3
        }, {
            "options": [
            "Sonepur (Bihar)",
            "Pushkar (Rajasthan)",
            "Surajkund (Haryana)",
            "Madhavpur (Gujarat)"
            ],
            "question": "Every year on Kartik Purnima, which town hosts India's biggest camel fair ? ",
            "answer": 1
        }, {
            "options": [
            "Surat (1907)",
            "Gaya (1922)",
            "Lahore (1929)",
            "Tripuri (1939)"
            ],
            "question": "At which session was the Indian National Congress (INC) divided into two groups - 'Naram Dal' (the moderates) and 'Garam Dal' (the extremists) ? ",
            "answer": 0
        }, {
            "options": [
            "Assam",
            "Meghalaya",
            "Manipur",
            "West Bengal"
            ],
            "question": "Kaziranga National Park, famous for hosting two-thirds of world's Indian Rhinoceroses (Great One-horned Rhinoceroses), is located in which Indian state ? ",
            "answer": 0
        }, {
            "options": [
            "Submarine",
            "Hovercraft",
            "Helicopter",
            "Aeroplane"
            ],
            "question": "Which among the following was invented by Orville and Wilbur Wright, popularly known as Wright brothers, in 1903 ? ",
            "answer": 3
        }, {
            "options": [
            "Greece",
            "Monaco",
            "Germany",
            "Switzerland"
            ],
            "question": "'Playground of Europe' is the nickname of which European country ? ",
            "answer": 3
        }, {
            "options": [
            "Tokyo (Japan)",
            "Jakarta (Indonesia)",
            "New Delhi (India)",
            "Manila (Philippines)"
            ],
            "question": "Which city hosted the first Asian Games in 1951 ? ",
            "answer": 2
        }, {
            "options": [
            "Mahi",
            "Tapti",
            "Narmada",
            "Sabarmati"
            ],
            "question": "Ukai Dam, located near Surat in Gujarat, is built across which river ? ",
            "answer": 1
        }, {
            "options": [
            "Ethane and Methane",
            "Carbon monoxide and Hydrogen",
            "Butane and Propane",
            "Carbon monoxide, Hydrogen and Methane"
            ],
            "question": "Which among the following are major constituents of Liquefied Petroleum Gas (LPG) ? ",
            "answer": 2
        }, {
            "options": [
            "Gaban",
            "Vardaan",
            "Godaan",
            "Sevasadan"
            ],
            "question": "'Hori', a poor farmer, is the main character of which famous Hindi novel by Munshi Premchand ? ",
            "answer": 2
        }, {
            "options": [
            "Aruna Roy",
            "Ela Bhatt",
            "Medha Patkar",
            "Teesta Setalvad"
            ],
            "question": "To have legal rights for self-employed women like industrial workers, which lady activist founded Self-Employed Women's Association (SEWA) ? ",
            "answer": 1
        }, {
            "options": [
            "Palk Strait",
            "Gulf of Mannar",
            "Nine Degree Channel",
            "Ten Degree Channel"
            ],
            "question": "Which waterbody seprates the Andaman Islands from the Nocibar Islands ?",
            "answer": 3
        }, {
            "options": [
            "Chiranjeevi",
            "Rajnikant",
            "Kamal Haasan",
            "Puneet Rajkumar"
            ],
            "question": "The Praja Rajayam Party, which has won 18 seats in recent Andhra Pradesh assembly elections, was floated by which popular filmstar ?",
            "answer": 0
        }, {
            "options": [
            "Valmiki",
            "Ved Vyas",
            "Tulsidas",
            "Patanjali"
            ],
            "question": "Who authored ancient Sanskrit epic 'Ramayana', also known as 'Adi-Kavya' (first epic poem) ?",
            "answer": 0
        }, {
            "options": [
            "Sitar",
            "Sarod",
            "Santoor",
            "Tabla"
            ],
            "question": "Pt. Shivkumar Sharma, who composed music for many Bollywood films along with Hariprasad Chaurasia under the name 'Shiv-Hari', is renowned player of which musical instrument ?",
            "answer": 2
        }, {
            "options": [
            "China",
            "Brazil",
            "India",
            "Russia"
            ],
            "question": "In addition to seven of the world's leading industrialised nations - USA, UK, Japan, Germany, France, Italy and Canada, which country is the 8th member of G8 group of nations ?",
            "answer": 3
        }, {
            "options": [
            "carbon-12",
            "carbon-13",
            "carbon-14",
            "carbon-12  carbon-13"
            ],
            "question": "In Radiocarbon dating method to estimate the age of organic matters recoverd from the archaeological sites, the residual quantity of which carbon isotope in the matter is measured to determine its age ?",
            "answer": 2
        }, {
            "options": [
            "Dhaka",
            "Lahore",
            "Aligarh",
            "Lucknow"
            ],
            "question": "Where did the All India Muslim League adopt the Pakistan resolution, the demand for separate sovereign state for Muslims, on 23 March 1940 ?",
            "answer": 1
        }, {
            "options": [
            "Hyder Ali",
            "Tipu Sultan",
            "Muhammad Quli Qutb Shah",
            "Krishna Deva Raya"
            ],
            "question": "Which south Indian ruler was a member of Jacobin Club, the largest and most powerful political club of the French Revolution, and planted the tree of 'Liberty' outside his palace ?",
            "answer": 1
        }, {
            "options": [
            "Nainital (Uttarakhand)",
            "Darjeeling (West Bengal)",
            "Kullu (Himachal Pradesh)",
            "Gulmarg (Jammu  Kashmir)"
            ],
            "question": "In which hill station is the High Altitude Research Laboratory located ?",
            "answer": 3
        }, {
            "options": [
            "Hera",
            "Nike",
            "Aphrodite",
            "Athena"
            ],
            "question": "Which Greek goddess of victory is depicted on the Olympic medals ?",
            "answer": 1
        }, {
            "options": [
            "Vijay Kelkar Committee",
            "B.K. Chaturvedi Committee",
            "R.K. Raghavan Committee",
            "Tejendra Khanna Committee"
            ],
            "question": "In 2002, which committee was set up by the government to suggest measures for rationalising direct and indirect taxes ? ",
            "answer": 0
        }, {
            "options": [
            "Hemu Vikramaditya",
            "Harshavardhana",
            "Chandragupta Maurya",
            "Chandragupta Vikramaditya"
            ],
            "question": "Between 1192 AD to 1857 AD, who was the only Hindu ruler to ascend the throne of Delhi ? ",
            "answer": 0
        }, {
            "options": [
            "12",
            "24",
            "48",
            "96"
            ],
            "question": "According to Standard time zone classification, the earth is divided into how many time zones ? ",
            "answer": 1
        }, {
            "options": [
            "Surat",
            "Rajkot",
            "Ahmedabad",
            "Vadodra"
            ],
            "question": "In which city of Gujarat is India's first and world's second Patang (Kite) Museum, founded by Bhanubhai Shah, located ? ",
            "answer": 2
        }, {
            "options": [
            "conduction and radiation",
            "convection and radiation",
            "conduction and convection",
            "conduction, convection and radiation"
            ],
            "question": "Heat travels from one place to another by which of the following methods ? ",
            "answer": 3
        }, {
            "options": [
            "Amritsar (Punjab)",
            "Patna (Bihar)",
            "Nanded (Maharashtra)",
            "Anandpur (Punjab)"
            ],
            "question": "The tenth and last Sikh Guru Gobind Singh was born at Patna in Bihar. Where did he die ? ",
            "answer": 2
        }, {
            "options": [
            "Thailand",
            "North Korea",
            "South Korea",
            "Indonesia"
            ],
            "question": "Pyongyang is the capital city of which Asian country ? ",
            "answer": 1
        }, {
            "options": [
            "Enrico Fermi",
            "J. Robert Oppenheimer",
            "Albert Einstein",
            "Ernest Rutherford"
            ],
            "question": "Which scientist is often referred to as the 'Father of the Atom Bomb' ? ",
            "answer": 1
        }, {
            "options": [
            "Mahatma Gandhi",
            "Bal Gangadhar Tilak",
            "Jawaharlal Nehru",
            "Maulana Abul Kalam Azad"
            ],
            "question": "'Glimpses of World History' book, containing collection of letters on world history written from various prisons in British India, was authored by which Indian freedom fighter ? ",
            "answer": 2
        }, {
            "options": [
            "Arjuna",
            "Vikrant",
            "Vijayant",
            "Bhishma"
            ],
            "question": "What Indian name has been given to locally assembled T-90S Main Battle Tanks (MBT), procured from Russia in 'knocked down / semi knocked down' form for final assembly in India ? ",
            "answer": 3
        }, {
            "options": [
            "Jyotirao Phule",
            "Gopal Hari Deshmukh",
            "Gopal Krishna Gokhle",
            "Bal Gangadhar Tilak"
            ],
            "question": "In 1893, who revived Ganesh Chaturthi annual festival in the form of a public festival and gave it a distinct political face ? ",
            "answer": 3
        }, {
            "options": [
            "Madras High Court",
            "Kerala High Court",
            "Andhra Pradesh High Court",
            "Karnataka High Court"
            ],
            "question": "The Union Territory of Puducherry (old name - Pondicherry) falls under the jurisdiction of which High Court ? ",
            "answer": 0
        }, {
            "options": [
            "Wipro",
            "Infosys",
            "Satyam Computers",
            "Tech Mahindra"
            ],
            "question": "Which was the first Indian company to list on the Nasdaq in 1999 ? ",
            "answer": 1
        }, {
            "options": [
            "Nepal",
            "Bhutan",
            "Thailand",
            "Myanmar"
            ],
            "question": "'Land of Thunderbolt' is the nickname of which Asian country ? ",
            "answer": 1
        }, {
            "options": [
            "Cholera",
            "Leprosy",
            "Typhoid",
            "Influenza"
            ],
            "question": "Which among the following is not a bacterial disease ? ",
            "answer": 3
        }, {
            "options": [
            "Indian Ocean",
            "Arctic Ocean",
            "Atlantic Ocean",
            "Pacific Ocean"
            ],
            "question": "Which Ocean's greatest depth is in the Puerto Rico Trench ? ",
            "answer": 2
        }, {
            "options": [
            "US Open",
            "Wimbledon",
            "Australian Open",
            "French Open"
            ],
            "question": "Which among the following Grand Slam tennis tournament is played on clay court ? ",
            "answer": 3
        }, {
            "options": [
            "Mahesh Yogi",
            "Osho Rajneesh",
            "Swami Prabhupada",
            "Swami Ramdev"
            ],
            "question": "Which Indian spiritual guru introduced Transcendental Meditation (TM) technique ? ",
            "answer": 0
        }, {
            "options": [
            "Wilson Jones",
            "Dhyan Chand",
            "K.D. Singh Babu",
            "Chunni Goswami"
            ],
            "question": "'Goal' is the autobiography of which Indian sportsman ? ",
            "answer": 1
        }, {
            "options": [
            "Bill Cinton",
            "Jimmy Carter",
            "Dwight Eisenhower",
            "Richard Nixon"
            ],
            "question": "Who was the first US president to visit India in December 1959 ? ",
            "answer": 2
        }, {
            "options": [
            "Carbonization",
            "Vulcanization",
            "Pasteurization",
            "Galvanization"
            ],
            "question": "What name is given to the metallurgical process used to coat steel or iron with zinc ? ",
            "answer": 3
        }, {
            "options": [
            "Arjuna Award",
            "Dronacharya Award",
            "Rajiv Gandhi Khel Ratna Award",
            "Dhyan Chand Award"
            ],
            "question": "Which award is presented by the government of India for excellence in sports coaching ? ",
            "answer": 1
        }, {
            "options": [
            "Sukumar Sen",
            "Harilal J. Kania",
            "Ganesh Vasudeo Mavlankar",
            "S.V. Krishnamoorthy"
            ],
            "question": "On 26 January 1950, who became the first Chief Justice (CJ) of India ? ",
            "answer": 1
        }, {
            "options": [
            "Karnataka",
            "Tamil Nadu",
            "Andhra Pradesh",
            "West Bengal"
            ],
            "question": "Which Indian state would you be in if you were enjoying sun bath at Devbagh Beach ? ",
            "answer": 0
        }, {
            "options": [
            "Vedas",
            "Upnishads",
            "Upvedas",
            "Vedangas"
            ],
            "question": "What is the collective name of ancient Indian texts 'Arthved' (science of sociology and economics), 'Dhanurved' (science of defence and war), Gandharvaved' (science of music) and 'Ayurved' (science of life) ? ",
            "answer": 2
        }, {
            "options": [
            "Amritsar",
            "Ludhiana",
            "Jalandhar",
            "Kapurthala"
            ],
            "question": "In which city of Punjab is the Rail Coach Factory, the passenger coach manufacturing unit of Indian Railways, located ? ",
            "answer": 3
        }, {
            "options": [
            "Kapil Dev",
            "Sandeep Patil",
            "Sunil Gavaskar",
            "E.A.S. Prasanna"
            ],
            "question": "'Idols', 'One Day Wonders' and 'Runs n Ruins' books are authored by which Indian cricketer ? ",
            "answer": 2
        }, {
            "options": [
            "Canada",
            "Germany",
            "United Kingdom",
            "United States of America"
            ],
            "question": "Saint Helena island, located in the South Atlantic Ocean, is the Overseas Territory of which country ? ",
            "answer": 2
        }, {
            "options": [
            "Rome (Italy)",
            "Vienna (Austria)",
            "Paris (France)",
            "Brussels (Belgium)"
            ],
            "question": "Which European city houses the headquarters of the Food and Agriculture Organization of the United Nations (FAO), a specialised agency that leads international efforts to defeat hunger ? ",
            "answer": 0
        }, {
            "options": [
            "Seva Parmo Dharma",
            "Veerta Aur Vivek",
            "Bharat Mata Ki Jai",
            "Vayam Rakshamah"
            ],
            "question": "What is the motto of the Indian Coast Guard, the fourth armed force of India ? ",
            "answer": 3
        }, {
            "options": [
            "250 members",
            "275 members",
            "300 members",
            "325 members"
            ],
            "question": "The actual strength of Rajya Sabha is 245 (233 elected  12 nominated) members. What is its maximum strength ? ",
            "answer": 0
        }, {
            "options": [
            "Kalol",
            "Mundra",
            "Nadiad",
            "Sanand"
            ],
            "question": "At which town in Gujarat is the Tata Group setting up its Nano car project ? ",
            "answer": 3
        }, {
            "options": [
            "Marathon",
            "50 km walk",
            "10,000 m race",
            "Bicycle race"
            ],
            "question": "With which athletic event is the 'Tour de France' competition associated ? ",
            "answer": 3
        }, {
            "options": [
            "Narmada",
            "Hooghly",
            "Mahanadi",
            "Swarnarekha"
            ],
            "question": "On the banks of which river is the city of Jamshedpur in Jharkhand located ? ",
            "answer": 3
        }, {
            "options": [
            "Shikha Sharma",
            "Chanda Kochar",
            "Lalita D. Gupte",
            "Naina Lal Kidawai"
            ],
            "question": "On 1 May 2009, which lady banker became the Managing Director (MD) and Chief Executive Ofiicer (CEO) of ICICI Bank, India's largest private sector bank ? ",
            "answer": 1
        }, {
            "options": [
            "Chandragupta Maurya",
            "Chandragupta Vikramaditya",
            "Gautamiputra Satakarni",
            "Harshavardhana"
            ],
            "question": "Which ruler of ancient India embraced Jainism and spent his last days at Shravanabelagola in Karnataka ? ",
            "answer": 0
        }, {
            "options": [
            "Italy",
            "Japan",
            "France",
            "Germany"
            ],
            "question": "In the World War II, which among the following country was not a member of the miltary alliance called 'Axis Powers' ? ",
            "answer": 2
        }, {
            "options": [
            "Amitav Ghosh",
            "Vikram Seth",
            "Salman Rushdie",
            "Shashi Tharoor"
            ],
            "question": "Who authored the English novel 'A Suitable Boy', considered to be the longest novel in a single volume ? ",
            "answer": 1
        }, {
            "options": [
            "Chile",
            "Nepal",
            "Ireland",
            "Liberia"
            ],
            "question": "Which is the only country in the world whose national flag is not rectangular ? ",
            "answer": 1
        }, {
            "options": [
            "Corona",
            "Chromosphere",
            "Photosphere",
            "Exosphere"
            ],
            "question": "Which is the lowest layer of the Sun, visible to us when we look at it ? ",
            "answer": 2
        }, {
            "options": [
            "Right to Equality",
            "Right to Freedom",
            "Right Against Exploitation",
            "Right to Property"
            ],
            "question": "As per the Constitution, which among the following is not a fundamental right granted to the citizens of India ? ",
            "answer": 3
        }, {
            "options": [
            "K.M. Munshi",
            "Madan Mohan Malaviya",
            "Rabindranath Tagore",
            "Dhondo Keshav Karve"
            ],
            "question": "Which Indian freedom fighter and educationist founded the Bharatiya Vidhya Bhavan, an educational trust, in Mumbai on 7 November 1938 ? ",
            "answer": 0
        }, {
            "options": [
            "Patna (Bihar)",
            "Ujjain (M.P.)",
            "Kannauj (U.P.)",
            "Guwahati (Assam)"
            ],
            "question": "In ancient times, which city was known as 'Pragjyotishpur' ? ",
            "answer": 3
        }, {
            "options": [
            "Mahatma Gandhi",
            "S. Radhakrishnan",
            "Jawaharlal Nehru",
            "M. Visvesarayya"
            ],
            "question": "Whose birthday on 14th November is celebrated as the Children's Day in India ? ",
            "answer": 2
        }, {
            "options": [
            "Nepal",
            "Myanmar",
            "Bhutan",
            "Sri Lanka"
            ],
            "question": "'Kyat' is the official currency of which Asian country ? ",
            "answer": 1
        }, {
            "options": [
            "Nagasena",
            "Ashvaghosha",
            "Bodhidharama",
            "Nagarjuna"
            ],
            "question": "The Buddhist text 'Milinda Panha' (Questions of Milinda) contains the discussions about Buddhism between Indo-Greek King Milind (Menander) and which Buddhist monk ? ",
            "answer": 0
        }, {
            "options": [
            "Surat (1907)",
            "Belgaum (1924)",
            "Lahore (1929)",
            "Tripuri (1939)"
            ],
            "question": "At which session, under the Presidency of Jawaharlal Nehru, did Indian National Congress (INC) declare 'Poorna Swaraj' (complete independence) as its goal ? ",
            "answer": 2
        }, {
            "options": [
            "Indian Rare Earths Ltd.",
            "Uranium Corporation of India Ltd.",
            "Electronics Corporation of India Ltd.",
            "Nuclear Power Corporation of India Ltd."
            ],
            "question": "Which among the following Public Sector Enterprises, under the Department of Atomic Energy, is located at Jaduguda in East Singhbhum district of Jharkhand ? ",
            "answer": 1
        }, {
            "options": [
            "Carbon",
            "Bromine",
            "Sulphur",
            "Selenium"
            ],
            "question": "Which is the only non-metal element that exists in liquid form at room temprature (25 degree Celsius) ? ",
            "answer": 1
        }, {
            "options": [
            "Mumbai (Maharashtra)",
            "Kochi (Kerala)",
            "Visakhapatnam (A.P.)",
            "Port Blair (A. N.Islands)"
            ],
            "question": "Where was India's first submarine base 'Virbahu' commissioned in 1971 ? ",
            "answer": 2
        }, {
            "options": [
            "Idukki",
            "Palakkad",
            "Alappuzha",
            "Ernakulam"
            ],
            "question": "Due to its criss-crossing canals, which Kerala town is also called 'The Venice of the East' ? ",
            "answer": 2
        }, {
            "options": [
            "Malaria",
            "Dengue",
            "Jaundice",
            "Diabetes"
            ],
            "question": "The increased level of the bilirubin in the blood leads to which disease ? ",
            "answer": 2
        }, {
            "options": [
            "one third",
            "two third",
            "one fourth",
            "one fifth"
            ],
            "question": "How many members of the Rajya Sabha retire every second year ? ",
            "answer": 0
        }, {
            "options": [
            "Assam",
            "Rajasthan",
            "Tamil Nadu",
            "Maharashtra"
            ],
            "question": "'Dhopkhel' is a famous traditional game of which Indian state ? ",
            "answer": 0
        }, {
            "options": [
            "Africa",
            "Europe",
            "Antarctica",
            "Australia"
            ],
            "question": "'Vinson Masiff' is the highest mountain peak of which continent ? ",
            "answer": 2
        }, {
            "options": [
            "Patna (Bihar)",
            "Aligarh (U.P.)",
            "Hyderabad (A.P.)",
            "Bhopal (M.P.)"
            ],
            "question": "In which Indian city would you be in if you were reading newspapers in the 'Khuda Bakhsh Oriental Public Library' ? ",
            "answer": 0
        }, {
            "options": [
            "Louis Pasteur",
            "Gregor Mendel",
            "Alexander Fleming",
            "Edward Jenner"
            ],
            "question": "Based on his experiments with pea plants, which Austrian monk discovered the Laws of Heredity ? ",
            "answer": 1
        }, {
            "options": [
            "Paris",
            "London",
            "Tokyo",
            "New York"
            ],
            "question": "Which city houses the headquarters of the 'Amnesty International', a world-wide human rights organisation ? ",
            "answer": 1
        }, {
            "options": [
            "Agra (Uttar Pradesh)",
            "Nagpur (Maharashtra)",
            "Gwalior (Madhya Pradesh)",
            "Jhansi (Uttar Pradesh)"
            ],
            "question": "Being constucted under National Highways Development Project (NHDP), at which place would the North-South Corridor and the East-West Corridor meet ? ",
            "answer": 3
        }, {
            "options": [
            "Badruddin Tyabji",
            "Hakim Ajmal Khan",
            "Maulana Mohammad Ali",
            "Maulana Abul Kalam Azad"
            ],
            "question": "To encourage Muslims to join independence movement, which Mecca (Saudi Arabia) born Indian freedom fighter established an Urdu weekly newspaper 'Al-Hilal' in 1912 ? ",
            "answer": 3
        }, {
            "options": [
            "Tamil Nadu",
            "Madhya Pradesh",
            "West Bengal",
            "Jammu  Kashmir"
            ],
            "question": "In addition to Uttar Pradesh, Bihar, Maharashtra, Karnataka and Andhra Pradesh, which is the sixth Indian state to have both houses i.e. Vidhan Sabha and Vidhan Parishad ? ",
            "answer": 3
        }, {
            "options": [
            "Isobar",
            "Isochrone",
            "Isotherm",
            "Isohalines"
            ],
            "question": "On the map, what line connects the places having equal average atmospheric pressure ? ",
            "answer": 0
        }, {
            "options": [
            "Mahatma Gandhi",
            "Subhas Chandra Bose",
            "Bal Gangadhar Tilak",
            "Jawaharlal Nehru"
            ],
            "question": "'Dilli Chalo' slogan was given by which Indian freedom fighter ? ",
            "answer": 1
        }, {
            "options": [
            "Karnataka",
            "Maharashtra",
            "Rajasthan",
            "Chhattisgarh"
            ],
            "question": "'Pandavani' is the popular folk theatre of which Indian state ? ",
            "answer": 3
        }, {
            "options": [
            "Pankaj Advani",
            "Sachin Tendulkar",
            "Vishwanathan Anand",
            "Abhinav Bindra"
            ],
            "question": "Who is the first Indian sportsman whose wax statue was inducted at Madame Tussaud's Wax Museum in London on 24 April 2009 ? ",
            "answer": 1
        }, {
            "options": [
            "Rajendra Prasad",
            "S. Radhakrishnan",
            "Neelam Sanjiva Reddy",
            "A.P.J. Abdul Kalam"
            ],
            "question": "Who is the only President of India to be elected unopposed ? ",
            "answer": 2
        }, {
            "options": [
            "Junko Tabei",
            "Bachendri Pal",
            "Dicky Dolma",
            "Alison Hargreaves"
            ],
            "question": "On 16 May 1975, who became the first woman in the world to reach the Mount Everest summit ? ",
            "answer": 0
        }, {
            "options": [
            "Pune",
            "Kolhapur",
            "Nagpur",
            "Aurangabad"
            ],
            "question": "Which city in Maharashtra is served by Dr. Ambedkar International Airport ? ",
            "answer": 2
        }, {
            "options": [
            "Ruskin Bond",
            "Salman Rushdie",
            "V.S. Naipaul",
            "Rudyard Kipling"
            ],
            "question": "Which Mumbai born Britisher wrote 'The Jungle Book', a collection of 'Mowgli' fame stories ? ",
            "answer": 3
        }, {
            "options": [
            "Kerala",
            "Tamil Nadu",
            "Karnataka",
            "Andhra Pradesh"
            ],
            "question": "The Nagarhole National Park, a part of the Nilgiri Biosphere Reserve, is located in which Indian state ? ",
            "answer": 2
        }, {
            "options": [
            "Chandrashekhar",
            "Atal Bihari Vajpayee",
            "Jawaharlal Nehru",
            "Vishwanath Pratap Singh"
            ],
            "question": "'Ek Tukda Dharti, Ek Tukda Aakash', a collection of poems, contains poems written by which former Prime Minister of India ? ",
            "answer": 3
        }, {
            "options": [
            "Bicycle",
            "Elephant",
            "Rising Sun",
            "Two Leaves"
            ],
            "question": "What is the electoral symbol of the Bahujan Samaj Party ? ",
            "answer": 1
        }, {
            "options": [
            "18 carat Gold",
            "20 carat Gold",
            "22 carat Gold",
            "24 carat Gold"
            ],
            "question": "The purity of precious metal Gold is measured in Carat. Which of the following refers to a Gold alloy having 75 percent of Gold and rest 25 percent of other metals ? ",
            "answer": 0
        }, {
            "options": [
            "Polo",
            "Hockey",
            "Football",
            "Cricket"
            ],
            "question": "In which of the following sport India has never won the World Championship ? ",
            "answer": 2
        }, {
            "options": [
            "Lake Baikal",
            "Caspian Sea",
            "Lake Superior",
            "Lake Victoria"
            ],
            "question": "Which is the largest lake in the world ? ",
            "answer": 1
        }, {
            "options": [
            "Sodium carbonate",
            "Sodium bicarbonate",
            "Sodium chloride",
            "Sodium nitrate"
            ],
            "question": "What is the chemical name of Washing Soda ? ",
            "answer": 0
        }, {
            "options": [
            "Mir Qasim",
            "Dalip Singh",
            "Ranjit Singh",
            "Tipu Sultan"
            ],
            "question": "From which Indian ruler did the Britishers aquire the Kohinoor diamond ? ",
            "answer": 1
        }, {
            "options": [
            "Nalanda Open University, Patna",
            "Dr.B.R.Ambedkar Open University, Hyderabad",
            "Indira Gandhi National Open University, New Delhi",
            "Netaji Subhas Open University, Kolkata"
            ],
            "question": "'Gyandarshan' is an educational TV channel of which Indian open university ? ",
            "answer": 2
        }, {
            "options": [
            "Banking",
            "Teaching",
            "Insurance",
            "Nursing"
            ],
            "question": "In which of the following field are the National Florence Nightingale Awards given for rendering meritorious services ? ",
            "answer": 3
        }, {
            "options": [
            "Lakshadweep",
            "Daman and Diu",
            "Andaman  Nicobar Islands",
            "Dadra  Nagar Haveli"
            ],
            "question": "In which Union Territory of India would you come across the 'Interview Island', 'Landfall Island' and 'Barren Island' ? ",
            "answer": 2
        }, {
            "options": [
            "K.M.Munshi",
            "B.R.Ambedkar",
            "Sachidananda Sinha",
            "Rajendra Prasad"
            ],
            "question": "Who was the Chairman of the Constitution Drafting Committee, formed on 29 August 1947 to write free India's new constitution ? ",
            "answer": 1
        }, {
            "options": [
            "Hysteroscopy",
            "Electrocardiogarm (ECG)",
            "Electroencephalogram (EEG)",
            "Opthalmoscopy"
            ],
            "question": "Which medical test is performed to detect problems in the electrical activity of the brain ? ",
            "answer": 2
        }, {
            "options": [
            "Brian Lara",
            "Allan Border",
            "Steve Waugh",
            "Sunil Gavaskar"
            ],
            "question": "Who was the first cricketer in the world to score 10,000 runs in Test Cricket ? ",
            "answer": 3
        }, {
            "options": [
            "Carbon",
            "Sulphur",
            "Calcium",
            "Potassium"
            ],
            "question": "In the chemical process of Vulcanization, with which element is the natural rubber heated to make it usable by improving its properties ? ",
            "answer": 1
        }, {
            "options": [
            "Goa",
            "Gujarat",
            "Kerala",
            "Karnataka"
            ],
            "question": "'Mandovi' and 'Zuari' are major rivers of which Indian state ? ",
            "answer": 0
        }, {
            "options": [
            "C.V. Raman",
            "Homi J. Bhabha",
            "Vikram Sarabhai",
            "Meghnad Saha"
            ],
            "question": "In 1947, which Indian scientist founded the Physical Research Laboratory (PRL), Ahmedabad ? ",
            "answer": 2
        }, {
            "options": [
            "Lewis Carroll",
            "William Shakespeare",
            "Charles Dickens",
            "Rudyard Kipling"
            ],
            "question": "Which English writer was popularly called 'Bard of Avon' ? ",
            "answer": 1
        }, {
            "options": [
            "Lord Mayo",
            "Lord Canning",
            "Lord Curzon",
            "Lord Dalhousie"
            ],
            "question": "Who was the Governor-General of India when the first train journey in India started between Mumbai and Thane on 16 April 1953 ? ",
            "answer": 3
        }, {
            "options": [
            "Al Baruni",
            "Marco Polo",
            "Ibn Batuta",
            "Niccolo de Conti"
            ],
            "question": "Which Moroccan traveller, who visited India in 14th century and served in the court of Muhammad bin Tughlag, had recorded the account of his travels in 'Rihla' (Voyage) ? ",
            "answer": 2
        }, {
            "options": [
            "Namibia",
            "Malawi",
            "Botswana",
            "Zimbabwe"
            ],
            "question": "Which African country was formerly known as South West Africa ? ",
            "answer": 0
        }, {
            "options": [
            "Leila Seth",
            "M.S. Fatima Beevi",
            "Cornelia Sorabji",
            "Anna Chandy"
            ],
            "question": "In 1989, who became the first woman judge of the Supreme Court of India ? ",
            "answer": 1
        }, {
            "options": [
            "Bindusara",
            "Ashok the Great",
            "Chandragupta Maurya",
            "Dasharatha Maurya"
            ],
            "question": "In 305 BC, which Maurya ruler defeated Alexander's general Seleucus Nicator and received the territories of Kabul and Balochistan ? ",
            "answer": 2
        }, {
            "options": [
            "Tapti",
            "Narmada",
            "Sabarmati",
            "Godavari"
            ],
            "question": "The multipurpose Sardar Sarovar Project is being built across which river ? ",
            "answer": 1
        }, {
            "options": [
            "The Kremlin",
            "Elysee Palace",
            "Buckingham Palace",
            "White House"
            ],
            "question": "What is the official residence of the US President ? ",
            "answer": 3
        }, {
            "options": [
            "Aravali",
            "Himalayas",
            "Sahyadri",
            "Vindhyas"
            ],
            "question": "Which is the oldest mountain range in India ? ",
            "answer": 0
        }, {
            "options": [
            "Kalidas",
            "Banabhatta",
            "Vishakhadatta",
            "Bhavabhuti"
            ],
            "question": "Who authored Sanskrit play the 'Mudrarakshasa' ? ",
            "answer": 2
        }, {
            "options": [
            "Rayon",
            "Nylon",
            "Teflon",
            "Zylon"
            ],
            "question": "By what name (in fact brand name) is the chemical 'Polytetrafluoroethylene', which is coated on cooking utensils to make them non sticky, better known ? ",
            "answer": 2
        }, {
            "options": [
            "U.Thant",
            "Trygve Lie",
            "Kurt Waldheim",
            "Kofi Annan"
            ],
            "question": "Ban Ki-moon, present Secretary-General, is the second Asian to hold the post of Secretary General of United Nations. Who was the first Asian ? ",
            "answer": 0
        }, {
            "options": [
            "Vinoo Mankad",
            "K.S.Ranjitsinhji",
            "K.S.Duleepsinhji",
            "I.A.K.Pataudi (Sr.)"
            ],
            "question": "Which Indian player, who represented England in the test cricket, is generally considered the inventor of 'Leg Glance Stroke' ? ",
            "answer": 1
        }, {
            "options": [
            "Mumbai",
            "Bengaluru",
            "Chennai",
            "Hyderabad"
            ],
            "question": "In which city is the International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI) located ? ",
            "answer": 3
        }, {
            "options": [
            "Acetic acid",
            "Citric acid",
            "Tartaric acid",
            "Formic acid"
            ],
            "question": "When an ant bites a person, which irritating chemical it (ant) injects into his (person) body ?",
            "answer": 3
        }, {
            "options": [
            "15",
            "18",
            "22",
            "24"
            ],
            "question": "In the Eighth Schedule of the Indian Consitution, how many languages have been officially recognised ?",
            "answer": 2
        }, {
            "options": [
            "Vinoba Bhave",
            "Mahatma Gandhi",
            "Jyotirao Phule",
            "Anna Hazare"
            ],
            "question": "Who founded the 'Sevagram Ashram' near Wardha in Maharashtra ?",
            "answer": 1
        }, {
            "options": [
            "Arjuna Award",
            "Ashok Chakra",
            "Param Vir Chakra",
            "Shaurya Chakra"
            ],
            "question": "Which among the following is not a gallantry award ?",
            "answer": 0
        }, {
            "options": [
            "Sumitranandan Pant",
            "Makhanlal Chaturvedi",
            "Rabindranath Tagore",
            "Maithili Sharan Gupt"
            ],
            "question": "Who authored the 'Gitanjali', an anthology of poems ?",
            "answer": 2
        }, {
            "options": [
            "France",
            "Britain",
            "Netherlands",
            "Portugal"
            ],
            "question": "Even though India became independent in 1947 but Daman and Diu remained a European colony till 1961. Which country ruled over it ?",
            "answer": 3
        }, {
            "options": [
            "India Gate",
            "Teen Murti Bhavan",
            "Rashtrapati Bhavan",
            "Sansad Bhavan"
            ],
            "question": "Which building, designed by British architect Edwin Lutyens, and located at Raisina Hill in New Delhi, was formerly known as 'Viceregal Palace' ?",
            "answer": 2
        }, {
            "options": [
            "Adoor",
            "Kottayam",
            "Alappuzha",
            "Palakkad"
            ],
            "question": "In 1989, which municipal town of Kerala became the first fully literate municipal town in India ?",
            "answer": 1
        }, {
            "options": [
            "Vijay Amritraj",
            "Prakash Padukone",
            "Vishwanathan Anand",
            "Sachin Tendulkar"
            ],
            "question": "In 2001, which Indian player was appointed as 'Messanger of Peace' by United Nations (UN), to promote its peacekeeping efforts ?",
            "answer": 0
        }, {
            "options": [
            "Vienna (Austria)",
            "Brussels (Belgium)",
            "Geneva (Switzerland)",
            "Montreal (Canada)"
            ],
            "question": "Which city houses the headquarters of the International Civil Aviation Organisation (ICAO) ?",
            "answer": 3
        }, {
            "options": [
            "Operation Pawan",
            "Operation Shakti",
            "Operation Vijay",
            "Operation Kalki"
            ],
            "question": "What was the code name of the five nuclear tests conducted by India at Pokhran test site in Rajasthan, in May 1998 ? ",
            "answer": 1
        }, {
            "options": [
            "Hockey",
            "Cricket",
            "Football",
            "Tennis"
            ],
            "question": "With which sport are the national tournaments 'Durand Cup' and 'Santosh Trophy' associated ? ",
            "answer": 2
        }, {
            "options": [
            "Dhondo Keshav Karve",
            "Gopal Krishna Gokhle",
            "Bal Gangadhar Tilak",
            "Gopal Hari Deshmukh"
            ],
            "question": "Which freedom fighter co-founded and edited both Marathi newspaper 'Kesari' and English newspaper 'Maratha' ? ",
            "answer": 2
        }, {
            "options": [
            "Liver",
            "Lungs",
            "Kidney",
            "Heart"
            ],
            "question": "Which body organ is the most affected by Hepatitis ? ",
            "answer": 0
        }, {
            "options": [
            "Diamond",
            "Fireworks",
            "Petrochemicals",
            "Sport Goods"
            ],
            "question": "Jalandhar in Punjab is famous for which indusrty ? ",
            "answer": 3
        }, {
            "options": [
            "Digboi (Assam)",
            "Mumbai (Maharashtra)",
            "Ankaleshwar (Gujarat)",
            "Dehradun (Uttarakhand)"
            ],
            "question": "In which city is the Indian Institute of Petroleum (IIP) located ? ",
            "answer": 3
        }, {
            "options": [
            "Katwa",
            "Kolkata",
            "Haldia",
            "Farakka"
            ],
            "question": "Starting from Allahabad in Uttar Pradesh, where does the National Waterway No.1, in Ganga-Bhagirathi-Hooghly rivers, terminate in West Bengal ? ",
            "answer": 2
        }, {
            "options": [
            "Brunei",
            "Vietnam",
            "North Korea",
            "Malaysia"
            ],
            "question": "Ho Chi Minh City, formerly known as Saigon, is the largest city of which Asian country ? ",
            "answer": 1
        }, {
            "options": [
            "Swaraj Paul",
            "Meghnad Desai",
            "Lakshmi Niwas Mittal",
            "Karan Bilimoria"
            ],
            "question": "Who is the first Indian to be appointed the deputy Speaker of the House of Lords (Upper House) of United Kingdom ? ",
            "answer": 0
        }, {
            "options": [
            "Shimla",
            "Kolkata",
            "Chennai",
            "Mumbai"
            ],
            "question": "In which Indian city was the world's first fingerprint bureau established, in 1897 ? ",
            "answer": 1
        }, {
            "options": [
            "Kavaratti",
            "Silvassa",
            "Puducherry",
            "Port Blair"
            ],
            "question": "What is the capital of the Indian union territory of Dadra and Nagar Haveli ? ",
            "answer": 1
        }, {
            "options": [
            "Oak",
            "Teak",
            "Willow",
            "Walnut"
            ],
            "question": "Which wood is normally used to make the Cricket bats ? ",
            "answer": 2
        }, {
            "options": [
            "China",
            "Japan",
            "Sri Lanka",
            "Myanmar"
            ],
            "question": "Which Asian country is also known as the 'Land of the Golden Pagoda' ? ",
            "answer": 3
        }, {
            "options": [
            "Khudiram Bose",
            "Ram Prasad Bismil",
            "Chandrasekhar Azad",
            "Batukeshwar Dutt"
            ],
            "question": "Which revolutionary, along with Bhagat Singh, threw a bomb onto the corridors of the Central Legislative Assembly on 8 April 1929 ? ",
            "answer": 3
        }, {
            "options": [
            "Kota (Rajasthan)",
            "Karwar (Karnataka)",
            "Surat (Gujarat)",
            "Mumbai (Maharashtra)"
            ],
            "question": "Near which city is the Kakrapar Nuclear Power Station located ? ",
            "answer": 2
        }, {
            "options": [
            "Koneru Humpy",
            "S. Vijayalakshmi",
            "Rohini Khadilkar",
            "Dronavalli Harika"
            ],
            "question": "Who is the first woman Chess Grand Master of India ? ",
            "answer": 1
        }, {
            "options": [
            "R.K. Narayan",
            "Satyajit Ray",
            "Mulk Raj Anand",
            "V.S. Naipaul"
            ],
            "question": "Who created fictional detective 'Feluda' ? ",
            "answer": 1
        }, {
            "options": [
            "Kandla (Gujarat)",
            "Kochi (Kerala)",
            "Falta (West Bengal)",
            "Chennai (Tamil Nadu)"
            ],
            "question": "In 1965, at which port was the India's first Free Trade Zone established ? ",
            "answer": 0
        }, {
            "options": [
            "Army Day",
            "Navy Day",
            "Indian Air Force Day",
            "Armed Forces Flag Day"
            ],
            "question": "On 15 January 1949, General K.M. Cariappa became the first Indian Commander-in-Chief of India. In memory of this event which national day is celebrated on 15th January ? ",
            "answer": 0
        }, {
            "options": [
            "Assam and Meghalaya",
            "Meghalaya and Manipur",
            "Manipur and Nagaland",
            "Tripura and Mizoram"
            ],
            "question": "In addition to Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand and West Bengal, the Tropic of Cancer passes through which north eastern states of India ? ",
            "answer": 3
        }, {
            "options": [
            "Mahatma Gandhi",
            "B.R.Ambedkar",
            "Jyotirao Phule",
            "Gopal Hari Deshmukh"
            ],
            "question": "On 20 July 1924, who founded the 'Bahishkrit Hitkarini Sabha' for the upliftment of the depressed classes ? ",
            "answer": 1
        }, {
            "options": [
            "Chief Minister",
            "Vidhan Sabha Speaker",
            "Chief Justice of Supreme Court",
            "Chief Justice of state High Court"
            ],
            "question": "Who administers the oath of office to the Governor of an Indian state ? ",
            "answer": 3
        }, {
            "options": [
            "Chittorgarh (Rajasthan)",
            "Mandu (Madhya Pradesh)",
            "Golkonda (Andhra Pradesh)",
            "Fatehpur Sikri (Uttar Pradesh)"
            ],
            "question": "In which fort would you come across the tomb (dargah) of Sufi saint Shaikh Salim Chisti ? ",
            "answer": 3
        }, {
            "options": [
            "Gram",
            "Maize",
            "Mustard",
            "Wheat"
            ],
            "question": "Which among the following is not a Rabi crop ? ",
            "answer": 1
        }, {
            "options": [
            "Maharashtra",
            "Madhya Pradesh",
            "West Bengal",
            "Andhra Pradesh"
            ],
            "question": "'Paithani' sarees are native of which Indian state ? ",
            "answer": 0
        }, {
            "options": [
            "Gautam",
            "Jaimini",
            "Kapil Muni",
            "Patanjali"
            ],
            "question": "Which ancient Indian sage authored the 'Sankhya Darshan' ? ",
            "answer": 2
        }, {
            "options": [
            "Zinc",
            "Lignite",
            "Copper",
            "Bauxite"
            ],
            "question": "Which mineral is mined at Zawar Mines near Udaipur in Rajasthan ? ",
            "answer": 0
        }, {
            "options": [
            "Junagarh (Gujarat)",
            "Lucknow (Uttar Pradesh)",
            "Bharatpur (Rajasthan)",
            "Rajahmundry (Andhra Pradesh)"
            ],
            "question": "In which city is the Indian Institute of Sugarcane Research (IISR) located ? ",
            "answer": 1
        }, {
            "options": [
            "Saras",
            "Tejas",
            "Chetak",
            "Lakshya"
            ],
            "question": "Which among the following is India's indigenously developed pilotless target aircraft (PTA) ? ",
            "answer": 3
        }, {
            "options": [
            "Dwarkanath Kotnis",
            "Bidhan Chandra Roy",
            "Upendranath Brahmachari",
            "Jagdish Chandra Bose"
            ],
            "question": "Which Indian physician discovered the treatment of Kala Azar (Black Fever) disease ? ",
            "answer": 2
        }, {
            "options": [
            "I",
            "HK",
            "4X",
            "VT"
            ],
            "question": "As an identification mark of the nationality, what letters are written on the civil aircrafts of India ? ",
            "answer": 3
        }, {
            "options": [
            "Moplah rebellion",
            "Chauri Chaura incident",
            "Komagata Maru incident",
            "Jallianwala Bagh massacre"
            ],
            "question": "Due to which incident did Mahatma Gandhi stop the Non-cooperation movement in February 1922 ? ",
            "answer": 1
        }, {
            "options": [
            "Altimeter",
            "Seismometer",
            "Lactometer",
            "Odometer"
            ],
            "question": "Which instrument is used to measure the density of milk ? ",
            "answer": 2
        }, {
            "options": [
            "Indra",
            "Surya",
            "Vishnu",
            "Varuna"
            ],
            "question": "In Rig veda, the maximum number of hymns are dedicated to which god ? ",
            "answer": 0
        }, {
            "options": [
            "Whale",
            "Dolphin",
            "Sea Otter",
            "Walrus"
            ],
            "question": "Which among the following sea mammal has tusks ? ",
            "answer": 3
        }, {
            "options": [
            "Cuba",
            "Brazil",
            "Bolivia",
            "Guyana"
            ],
            "question": "Which country is also known as the 'Sugar Bowl of the World' ? ",
            "answer": 0
        }, {
            "options": [
            "Rana Sanga",
            "Sher Shah Suri",
            "Muhammad bin Tughlaq",
            "Hemu Vikramaditya"
            ],
            "question": "Who defeated the Mughal ruler Humayun in the Battle of Chausa (1539) and ascended the throne of Delhi ? ",
            "answer": 1
        }, {
            "options": [
            "Mumbai",
            "Kanpur",
            "Kharagpur",
            "Chennai"
            ],
            "question": "On the recommendations of N.R.Sarkar committee, where was the first Indian Institute of Technology (IIT) established in 1950 ? ",
            "answer": 2
        }, {
            "options": [
            "Punjab",
            "Uttarakhand",
            "Himachal Pradesh",
            "Uttar Pradesh"
            ],
            "question": "Which Indian state is drained by 'Beas', 'Chenab', 'Ravi', 'Sutlej' and 'Yamuna' rivers ? ",
            "answer": 2
        }, {
            "options": [
            "Ronald Ross",
            "Rudyard Kipling",
            "William R. Cremer",
            "Alexander Fleming"
            ],
            "question": "Born at Almora in Uttarakhand, which Britisher became the first India born person to get the Nobel Prize in 1902 ? ",
            "answer": 0
        }, {
            "options": [
            "42nd Amendment",
            "44th Amendment",
            "46th Amendment",
            "48th Amendment"
            ],
            "question": "By which amendment were the 'Socialist' and 'Secular' words included in the Preamble to the Constitution of India ? ",
            "answer": 0
        }, {
            "options": [
            "Silk",
            "Wool",
            "Jute",
            "Cotton"
            ],
            "question": "Which among the following natural fibre is obtained from the flower of a plant ? ",
            "answer": 3
        }, {
            "options": [
            "Iran",
            "China",
            "Afghanistan",
            "Tajikistan"
            ],
            "question": "The Khyber pass, a strategic mountain pass between Central Asia and South Asia, connects the Pakistan to which country ? ",
            "answer": 2
        }, {
            "options": [
            "Caligraphy",
            "Lithography",
            "Demography",
            "Topography"
            ],
            "question": "What name is given to the scientific study of human populations ? ",
            "answer": 2
        }, {
            "options": [
            "Heart",
            "Bone Marrow",
            "Pancreas",
            "Thyroid"
            ],
            "question": "In humans, where do Red blood cells (RBC) originate ? ",
            "answer": 1
        }, {
            "options": [
            "Jabalpur",
            "Allahabad",
            "New Delhi",
            "Navi Mumbai"
            ],
            "question": "The Indian Institute of Geomagnetism is located in which city ? ",
            "answer": 3
        }, {
            "options": [
            "Kaifi Azmi",
            "Firaq Gorakhpuri",
            "Sahir Ludhianvi",
            "Jigar Muradabadi"
            ],
            "question": "By what name is the Urdu poet Raghupati Sahay, recipient of Jnanpith Award 1969 for anthology of poems 'Gul-e-Nagma', better known ? ",
            "answer": 1
        }, {
            "options": [
            "Assam",
            "Manipur",
            "Meghalaya",
            "Nagaland"
            ],
            "question": "In which north eastern Indian state is the Nokrek Biosphere Reserve located ? ",
            "answer": 2
        }, {
            "options": [
            "Aarti Pradhan",
            "Nisha Millet",
            "Meghna Narayan",
            "Bula Choudhury"
            ],
            "question": "On 29 August 1988, which Indian lady became the first woman in the world to swim across the Straits of Gibraltar ? ",
            "answer": 0
        }, {
            "options": [
            "Benin",
            "Somalia",
            "Malawi",
            "Djibouti"
            ],
            "question": "Which African country was formerly known as 'French Somaliland' ? ",
            "answer": 3
        }, {
            "options": [
            "Myanmar",
            "Pakistan",
            "Sri Lanka",
            "Bangladesh"
            ],
            "question": "'Taka' is the official currency of which Asian country ? ",
            "answer": 3
        }, {
            "options": [
            "Isaac Newton",
            "Charles Darwin",
            "Gregor Mendel",
            "Albert Einstein"
            ],
            "question": "In 1905, who propounded the Theory of Relativity ? ",
            "answer": 3
        }, {
            "options": [
            "1 May",
            "5 June",
            "6 August",
            "8 March"
            ],
            "question": "On which date is the World Environment Day celebrated ? ",
            "answer": 1
        }, {
            "options": [
            "156",
            "206",
            "256",
            "306"
            ],
            "question": "How many bones are there in the adult human skeleton ? ",
            "answer": 1
        }, {
            "options": [
            "R.K.Narayan",
            "Mulk Raj Anand",
            "Khushwant Singh",
            "Upamanyu Chatterjee"
            ],
            "question": "'Coolie' and 'Untouchable' novels were authored by which Indian writer ? ",
            "answer": 1
        }, {
            "options": [
            "Mars",
            "Venus",
            "Jupiter",
            "Saturn"
            ],
            "question": "Which planet, named after the Roman god of war, is also called 'Red Planet' due to its reddish  appearance, caused by iron oxide prevalent on its surface ? ",
            "answer": 0
        }, {
            "options": [
            "R.S. Pathak",
            "P.N. Bhagwati",
            "Nagendra Singh",
            "Benegal Rama Rau"
            ],
            "question": "In 1985, who became the first Indian to be elected the President of the International Court of Justice (ICJ) at The Hague, Netherlands ? ",
            "answer": 2
        }, {
            "options": [
            "Kerala",
            "Karnataka",
            "Gujarat",
            "Maharashtra"
            ],
            "question": "Gopnath Beach, a pristine beach on the coast of Arabian Sea, is located in which Indian state ? ",
            "answer": 2
        }, {
            "options": [
            "Al Baruni",
            "Ibn Batuta",
            "Marco Polo",
            "Niccolo de Conti"
            ],
            "question": "In 15th century, which Italian traveller visited the Vijayanagar, the capital city of erstwhile Vijayanagar empire ? ",
            "answer": 3
        }, {
            "options": [
            "Polo",
            "Golf",
            "Hockey",
            "Tennis"
            ],
            "question": "In which sport would you find the players wearing 'Jodhpurs', the tight fitting trousers named after the city of Jodhpur in Rajasthan ? ",
            "answer": 0
        }, {
            "options": [
            "H.V.R. Iyengar",
            "K.G. Ambegaonkar",
            "Benegal Rama Rau",
            "C.D. Deshmukh"
            ],
            "question": "In 1943, who became the first Indian to be appointed as the Governor of the Reserve Bank of India (RBI) ? ",
            "answer": 3
        }, {
            "options": [
            "Mumbai",
            "Kolkata",
            "New Delhi",
            "Chennai"
            ],
            "question": "'Dharavi', one of the largest slum in Asia, is part of which Indian city ? ",
            "answer": 0
        }, {
            "options": [
            "Muhammad Shah",
            "Ahmad Shah Bahadur",
            "Farrukhsiyar",
            "Rafi ud-Daulat"
            ],
            "question": "During the reign of which Mughal ruler did the Persian ruler Nader Shah invade India in 1739 ? ",
            "answer": 0
        }, {
            "options": [
            "Kabir",
            "Tulsidas",
            "Surdas",
            "Jayadeva"
            ],
            "question": "Who authored the poetic works 'Krishna Gitavali', 'Kavitavali' and 'Vinaya Patrika' ? ",
            "answer": 1
        }, {
            "options": [
            "Patna (Bihar)",
            "Kannauj (U.P.)",
            "Ujjain (M.P.)",
            "Guwahati (Assam)"
            ],
            "question": "In ancient times, which Indian city was known as 'Avantika' ? ",
            "answer": 2
        }, {
            "options": [
            "545 members",
            "547 members",
            "552 members",
            "555 members"
            ],
            "question": "As prescribed in the Constitution, what is the maximum strength of the Lok Sabha ? ",
            "answer": 2
        }, {
            "options": [
            "Sikar",
            "Churu",
            "Dausa",
            "Nagaur"
            ],
            "question": "On 2 October 1959, at which town in Rajasthan did Pandit Jawaharlal Nehru, then Prime Minister, inaugurate the Panchayati Raj in India ? ",
            "answer": 3
        }, {
            "options": [
            "Baba Amte",
            "Jyotirao Phule",
            "C.F. Andrews",
            "Mother Teresa"
            ],
            "question": "Who was also known as the 'Saint of the Gutters' ? ",
            "answer": 3
        }, {
            "options": [
            "Australia",
            "North America",
            "South America",
            "Antarctica"
            ],
            "question": "Mount McKinley is the highest mountain peak of which continent ? ",
            "answer": 1
        }, {
            "options": [
            "Sodium chloride",
            "Calcium carbide",
            "Potassium permanganate",
            "Sodium bicarbonate"
            ],
            "question": "Despite a ban by the Government as it produces harmful acetylene gas, which chemical is most commonly used by fruit sellers for artificial ripening of fruits ? ",
            "answer": 1
        }, {
            "options": [
            "Consumer Price Index (CPI)",
            "Consumer Confidence Index (CCI)",
            "Wholesale Price Index (WPI)",
            "Index of Industrial Production (IIP)"
            ],
            "question": "In India, the inflation rate represents the annual change (in percentage) in which index ? ",
            "answer": 2
        }, {
            "options": [
            "Argon",
            "Helium",
            "Krypton",
            "Xenon"
            ],
            "question": "To preserve the filaments at high temprature, which gas is filled in the electric bulbs ? ",
            "answer": 0
        }, {
            "options": [
            "Jainism",
            "Sikhism",
            "Buddhism",
            "Christianity"
            ],
            "question": "'The Four Noble Truths' and 'Noble Eightfold Path'  are the cornerstones of which religion ? ",
            "answer": 2
        }, {
            "options": [
            "Sodium chloride",
            "Sodium bicarbonate",
            "Potassium permanganate",
            "Calcium carbonate"
            ],
            "question": "What is the chemical name of Baking Soda ? ",
            "answer": 1
        }, {
            "options": [
            "Kalpana Chawla",
            "Valentina Tereshkova",
            "Anousheh Ansari",
            "Svetlana Savitskaya"
            ],
            "question": "On 16 June 1963, who became the first woman in the world to go into space ? ",
            "answer": 1
        }, {
            "options": [
            "Surya",
            "Hanuman",
            "Ganesh",
            "Vishnu"
            ],
            "question": "Tirupati Balaji Temple at Tirumala in Andhra Pradesh, one of the richest place of worship in the world, is dedicated to which Hindu god ? ",
            "answer": 3
        }, {
            "options": [
            "Rabindranath Tagore",
            "Bankim Chandra Chatterjee",
            "Sharat Chandra Chatterjee",
            "Bibhutibhushan Bandopadhyay"
            ],
            "question": "Directed by Satyajit Ray, the Apu Trilogy films - 'Pather Panchali', 'Aparajito' and 'Apur Sansar' - were based on the novels of which Bengali writer ? ",
            "answer": 3
        }, {
            "options": [
            "Pune",
            "Nasik",
            "Nagpur",
            "Mumbai"
            ],
            "question": "In which city in Maharashtra is the 'Chaitya Bhoomi', the cremation site of Dr.B.R.Ambedkar, located ? ",
            "answer": 3
        }, {
            "options": [
            "Chess",
            "Snooker",
            "Carrom",
            "Badminton"
            ],
            "question": "In 1875, which indoor game was invented by British Army officer Colonel Neville Chamberlain at Jabalpur in Madhya Pradesh ? ",
            "answer": 1
        }, {
            "options": [
            "Panaji (Goa)",
            "Kavaratti (Lakshadweep)",
            "Chennai (Tamil Nadu)",
            "Thiruvananthpuram (Kerala)"
            ],
            "question": "To send a letter to a member of Indian scientific expedition stationed at Indian base station 'Maitreyi' in Antarctica, the pin code of which city would you write in the address ? ",
            "answer": 0
        }, {
            "options": [
            "King Cobra",
            "Rattlesnake",
            "Coral Snake",
            "Golden Tree Snake"
            ],
            "question": "Which is the only snake that builts the nest ? ",
            "answer": 0
        }, {
            "options": [
            "Golf",
            "Hockey",
            "Football",
            "Cricket"
            ],
            "question": "With which sport is the Rangaswamy Cup associated ? ",
            "answer": 1
        }, {
            "options": [
            "Carbon",
            "Oxygen",
            "Hydrogen",
            "Nitrogen"
            ],
            "question": "Which element is not present in Sugar ? ",
            "answer": 3
        }, {
            "options": [
            "927 females per 1000 males",
            "933 females per 1000 males",
            "945 females per 1000 males",
            "950 females per 1000 males"
            ],
            "question": "According to the 2001 Census, what is the sex-ratio (females per 1000 males) in India ? ",
            "answer": 1
        }, {
            "options": [
            "Chennai",
            "Ahmedabad",
            "Bengaluru",
            "Cuttack"
            ],
            "question": "On the outskirts of which city did renowned Odissi dancer Protima Gauri Bedi found 'Nrityagram' dance school ? ",
            "answer": 2
        }, {
            "options": [
            "Maitreyi Express",
            "Matsyagandha Express",
            "Himsagar Express",
            "Samjhauta Express"
            ],
            "question": "Which train service, covering 3,726 Km. between Jammu Tawi (Jammu  Kashmir) and Kanyakumari (Tamil Nadu), is the longest passenger train service in India ? ",
            "answer": 2
        }, {
            "options": [
            "Leningrad",
            "Volgograd",
            "Stalingrad",
            "Byzantium"
            ],
            "question": "What was the former official name of St. Petersburg, the second largest city in Russia ? ",
            "answer": 0
        }, {
            "options": [
            "Kalidas",
            "Banabhatta",
            "Bhavabhuti",
            "Shudraka"
            ],
            "question": "Who wrote the ancient Sanskrit play 'Mrichchhakatika' (The Little Clay Cart) ? ",
            "answer": 3
        }, {
            "options": [
            "Bhilai",
            "Raipur",
            "Bilaspur",
            "Jagdalpur"
            ],
            "question": "In which city is the Chhattisgarh High Court located ? ",
            "answer": 2
        }, {
            "options": [
            "Adam Osborne",
            "Charles Babbage",
            "Gordon Moore",
            "Tim Berners-Lee"
            ],
            "question": "Which British computer scientist is credited with inventing the World Wide Web, popularly known as Internet ? ",
            "answer": 3
        }, {
            "options": [
            "Butane",
            "Propane",
            "Methane",
            "Hydrogen"
            ],
            "question": "Which gas is the main constituent of 'Gobar Gas', the biogas generated by de-composition of cow dung ? ",
            "answer": 2
        }, {
            "options": [
            "Mumbai",
            "New Delhi",
            "Chennai",
            "Kolkata"
            ],
            "question": "Shankar's International Dolls Museum, founded by renowned cartoonist K. Shankar Pillai, and which has the largest collection of costume dolls in the world, is located in which city ? ",
            "answer": 1
        }, {
            "options": [
            "Mahatma Gandhi",
            "Subhash Chand Bose",
            "Bal Gangadhar Tilak",
            "Bhagat Singh"
            ],
            "question": "'Do or Die' (Karo ya Maro) slogan was given by which freedom fighter in 1942 ? ",
            "answer": 0
        }, {
            "options": [
            "1840 votes",
            "2840 votes",
            "3840 votes",
            "4840 votes"
            ],
            "question": "What is the maximum number of votes which an Electronic Voting Machine (EVM) can record ? ",
            "answer": 2
        }, {
            "options": [
            "Kerala",
            "Punjab",
            "Maharashtra",
            "Jammu  Kashmir"
            ],
            "question": "'Sqay' (literally meaning knowledge of war) martial art is native of which Indian state ? ",
            "answer": 3
        }, {
            "options": [
            "Mohun Bagan",
            "East Bengal",
            "Mohammedan Sporting",
            "Churchill Brothers"
            ],
            "question": "Which is the oldest football club in India ? ",
            "answer": 0
        }, {
            "options": [
            "Idi Amin",
            "Joseph Stalin",
            "Adolf Hitler",
            "Benito Mussolini"
            ],
            "question": "Which dictator was also called 'Fuhrer' ? ",
            "answer": 2
        }, {
            "options": [
            "Oscilloscope",
            "Geiger counter",
            "Geordie Lamp",
            "Kipp's apparatus"
            ],
            "question": "Which device is used to detect radioactivity ? ",
            "answer": 1
        }, {
            "options": [
            "China and Korea",
            "China and Japan",
            "China and Russia",
            "China and Britain"
            ],
            "question": "In 19th century, between which countries were the Opium Wars fought ? ",
            "answer": 3
        }, {
            "options": [
            "S.D.Pottekkatt",
            "G.Sankara Kurup",
            "M.T.Vasudevan Nair",
            "Takazhi S. Pillai"
            ],
            "question": "Which Malayalam writer was awarded the first Jnanpith Award in 1965, for his anthology of poems the 'Odakuzhal' (The Flute) ?  ",
            "answer": 1
        }, {
            "options": [
            "Bhagat Singh",
            "Lala Har Dayal",
            "Chandrashekhar Azad",
            "Veer Savarkar"
            ],
            "question": "'Inquilab Zindabad' (long live revolution) slogan was first used by which revolutionary ?",
            "answer": 0
        }, {
            "options": [
            "Zinc",
            "Calcium",
            "Iodine",
            "Phosphorus"
            ],
            "question": "The deficiency of which element leads to the 'Goitre', a swelling in thyroid gland ?",
            "answer": 2
        }, {
            "options": [
            "Gauhara Begum",
            "Jahanara Begum",
            "Gulbadan Begum",
            "Roshanara Begum"
            ],
            "question": "'Humayun Nama', a historical chronicle about the reign of Mughal ruler Humayun, was written by which Mughal princess ?",
            "answer": 2
        }, {
            "options": [
            "Jagjivan Ram",
            "Mahatma Gandhi",
            "B.R.Ambedkar",
            "Jyotirao Phule"
            ],
            "question": "Who founded the 'All India Harijan Sangh' in 1932 ?",
            "answer": 1
        }, {
            "options": [
            "Meera Ben",
            "Mother Teresa",
            "Savitri Khanolkar",
            "Sister Nivedita"
            ],
            "question": "By what name is the Irish lady Margaret Elizabeth Noble, a disciple of Swami Vivekananda, better known ?",
            "answer": 3
        }, {
            "options": [
            "Chennai",
            "Thanjavur",
            "Kancheepuram",
            "Madurai"
            ],
            "question": "Between 1-4 AD, which city hosted the great Tamil literary assembly called 'Sangam' ?",
            "answer": 3
        }, {
            "options": [
            "US dollar",
            "British pound",
            "Japanese yen",
            "Chinese yuan"
            ],
            "question": "Which currency is popularly called 'Greenback' ?",
            "answer": 0
        }, {
            "options": [
            "Asia",
            "Europe",
            "Africa",
            "S.America"
            ],
            "question": "'Cape Horn' is the southernmost point of which continent ?",
            "answer": 3
        }, {
            "options": [
            "Saina Nehwal",
            "Joshna Chinappa",
            "Anuja Thakur",
            "Sania Mirza"
            ],
            "question": "Which Indian sportswoman won the World Ladies Billiards Championship in 2005 ?",
            "answer": 2
        }, {
            "options": [
            "Mars",
            "Venus",
            "Jupiter",
            "Saturn"
            ],
            "question": "In Solar System, which planet's day is longer than its year since it completes one rotation on the axis in 243 earth days but takes only 225 earth days to orbit the Sun ?",
            "answer": 1
        }, {
            "options": [
            "Haryana",
            "Uttarakhand",
            "Madhya Pradesh",
            "Rajasthan"
            ],
            "question": "In which Indian state is the Sultanpur National Park located ? ",
            "answer": 0
        }, {
            "options": [
            "Firuz Shah Tughlaq",
            "Ghiyas-ud-din Tughlaq",
            "Muhammad bin Tughlaq",
            "Mahmud Nasir-ud-din"
            ],
            "question": "In 1321, who founded the Tughlaq Dynasty in Delhi ? ",
            "answer": 1
        }, {
            "options": [
            "Barometer",
            "Anemometer",
            "Thermometer",
            "Hygrometer"
            ],
            "question": "Which instrument is used for measuring the relative humidity (amount of water present in a gaseous mixure of air and water) ? ",
            "answer": 3
        }, {
            "options": [
            "Paris",
            "London",
            "Melbourne",
            "New York"
            ],
            "question": "Which city annually hosts the Wimbledon tennis championship, one of the four Grand Slam tennis tournaments ? ",
            "answer": 1
        }, {
            "options": [
            "Karl Marx",
            "Charles Darwin",
            "Sigmund Freud",
            "Shakespeare"
            ],
            "question": "Who authored the book 'The Interpretation of Dreams' ? ",
            "answer": 2
        }, {
            "options": [
            "Norway",
            "Sweden",
            "Denmark",
            "Finland"
            ],
            "question": "Which European country is also known as the 'Land of the Midnight Sun' ? ",
            "answer": 0
        }, {
            "options": [
            "Mysore",
            "Bengaluru",
            "Gulbarga",
            "Mangalore"
            ],
            "question": "The Konkan Railway, a railway line which runs parallel to the Arabian Sea coastline, connects Mumbai to which city in Karnataka ? ",
            "answer": 3
        }, {
            "options": [
            "Shah Nawaz Committee",
            "Ashok Mehta Committee",
            "Balwant Rai Mehta Committee",
            "R.K.Raghavan Committee"
            ],
            "question": "At the directive of the Supreme Court of India, which committee was set up by the Ministry of Human Resources Development (MHRD) to recommend anti-ragging measures ? ",
            "answer": 3
        }, {
            "options": [
            "Guwahati (Assam)",
            "Shillong (Meghalaya)",
            "Agartala (Tripura)",
            "Kolkata (West Bengal)"
            ],
            "question": "Where are the headquarters of Eastern Air Command (EAC) of the Indian Air Force (IAF) located ? ",
            "answer": 1
        }, {
            "options": [
            "Angul",
            "Balasore",
            "Sambalpur",
            "Jharsuguda"
            ],
            "question": "For taking care of newborn babies and their mothers, at which place in Orissa was the 'Yashoda Scheme' launched in May 2008 ? ",
            "answer": 2
        }, {
            "options": [
            "Infosys",
            "Accenture",
            "Larsen  Toubro",
            "Tech Mahindra"
            ],
            "question": "Which company has aquired a controlling stake in the scam-hit Satyam Computer Services, Hyderabad ? ",
            "answer": 3
        }, {
            "options": [
            "Tabla",
            "Sitar",
            "Sarod",
            "Guitar"
            ],
            "question": "With with musical instrument is Ustad Amjad Ali Khan associated ? ",
            "answer": 2
        }, {
            "options": [
            "B.R.Ambedkar",
            "Jyotirao Phule",
            "Mahatma Gandhi",
            "Gopal Hari Deshmukh"
            ],
            "question": "To prevent lower castes from the exploitation by upper castes, who founded the 'Satyashodhak Samaj' (Society of Seekers of Truth) in 1874 ? ",
            "answer": 1
        }, {
            "options": [
            "Boat",
            "Truck",
            "Tank",
            "Aircraft"
            ],
            "question": "In transport, what are 'Dinghy', 'Gondola' and 'Kayak' types of ? ",
            "answer": 0
        }, {
            "options": [
            "Hisar (Haryana)",
            "Bikaner (Rajasthan)",
            "Dirang (Arunachal Pradesh)",
            "Izatnagar (Uttar Pradesh)"
            ],
            "question": "Where is the Indian Veterinary Research Institute (IVRI) located ? ",
            "answer": 3
        }, {
            "options": [
            "Beas (Hyphasis)",
            "Chenab (Acesines)",
            "Jhelum (Hydaspes)",
            "Sutlej (Hesidros)"
            ],
            "question": "In 326 BC, on the banks of which river did the Macedonian King Alexander the Great defeat the Indian King Porus ? ",
            "answer": 2
        }, {
            "options": [
            "Shiv Khera",
            "Deepak Chopra",
            "Stephen Covey",
            "Dale Carnegie"
            ],
            "question": "Who authored the famous book 'The Seven Spiritual Laws of Success' ? ",
            "answer": 1
        }, {
            "options": [
            "Africa",
            "Europe",
            "North America",
            "Australia"
            ],
            "question": "The Bering Strait seprates the Asia from which continent ? ",
            "answer": 2
        }, {
            "options": [
            "Saras",
            "Tejas",
            "Kiran",
            "Chetak"
            ],
            "question": "Which among the following is the indigenously developed Light Combat Aircraft (LCA) of India ? ",
            "answer": 1
        }, {
            "options": [
            "Nauru",
            "Taiwan",
            "Tuvalu",
            "Vanuatu"
            ],
            "question": "Which island nation, located in the Pacific ocean, was formerly known as 'Pleasant Island' ? ",
            "answer": 0
        }, {
            "options": [
            "North-East Monsoon",
            "North-West Monsoon",
            "South-East Monsoon",
            "South-West Monsoon"
            ],
            "question": "The India receives its major rainfall from which monsoon ?",
            "answer": 3
        }, {
            "options": [
            "2 years",
            "3 years",
            "4 years",
            "5 years"
            ],
            "question": "How many years does the US President serve during one term ?",
            "answer": 2
        }, {
            "options": [
            "Kerala",
            "Tamil Nadu",
            "Andhra Pradesh",
            "Karnataka"
            ],
            "question": "'God's Own Country' slogan is being used by which south Indian state to promote its tourism industry ?",
            "answer": 0
        }, {
            "options": [
            "Hideki Yukawa (Japan)",
            "Shmuel Yosef Agnon (Isreal)",
            "Chen Ning Yang (China)",
            "Rabindranath Tagore (India)"
            ],
            "question": "In 1913, who became the first Asian to be honoured with Nobel Prize ?",
            "answer": 3
        }, {
            "options": [
            "Gujarat",
            "Maharashtra",
            "West Bengal",
            "Uttar Pradesh"
            ],
            "question": "'Jatra' is the popular folk theatre of which Indian state ?",
            "answer": 2
        }, {
            "options": [
            "Assam Rifles",
            "Border Security Force",
            "Indo-Tibetan Border Police",
            "National Security Guards"
            ],
            "question": "Which is the oldest para military force in India ?",
            "answer": 0
        }, {
            "options": [
            "Otoplasty",
            "Genioplasty",
            "Angioplasty",
            "Rhinoplasty"
            ],
            "question": "To widen a narrowed or obstructed blood vessel, which surgical procedure is applied ?",
            "answer": 2
        }, {
            "options": [
            "Equator",
            "Tropic of Cancer",
            "Tropic of Capricorn",
            "Antarctic Circle"
            ],
            "question": "Which among the following latitude line (also called circle) passes through the India ?",
            "answer": 1
        }, {
            "options": [
            "Hindi",
            "French",
            "Arabic",
            "Spanish"
            ],
            "question": "Which among the following is not a official language of United Nations (UN) ?",
            "answer": 0
        }, {
            "options": [
            "Karl Marx",
            "Adam Smith",
            "John Maynard Keynes",
            "Milton Friedman"
            ],
            "question": "Who advocated that a free market economy is more productive and more benefial to society, in his famous book 'The Wealth of Nations' ?",
            "answer": 1
        }, {
            "options": [
            "Locks",
            "Bicycle",
            "Textile",
            "Fireworks"
            ],
            "question": "Aligarh in Uttar Pradesh is famous for which industry ? ",
            "answer": 0
        }, {
            "options": [
            "Golf",
            "Chess",
            "Cricket",
            "Hockey"
            ],
            "question": "With which sport is the Duckworth-Lewis Method associated ? ",
            "answer": 2
        }, {
            "options": [
            "68 beats per minute",
            "72 beats per minute",
            "76 beats per minute",
            "80 beats per minute"
            ],
            "question": "What is the normal heart rate of adults at rest ? ",
            "answer": 1
        }, {
            "options": [
            "Kadamba",
            "Rashtrakuta",
            "Chalukya",
            "Satavahana"
            ],
            "question": "Kailash Temple at Ellora in Maharahstra, the epitome of Indian rock-cut architecture, was built by the rulers of which dynasty ? ",
            "answer": 1
        }, {
            "options": [
            "Italy",
            "Greece",
            "Ireland",
            "Turkey"
            ],
            "question": "'Sick man of Europe' is the nickname of which European country ? ",
            "answer": 3
        }, {
            "options": [
            "Repo Rate",
            "Reverse Repo Rate",
            "Call Money Rate",
            "Prime Lending Rate (PLR)"
            ],
            "question": "What is the interest rate at which banks borrow money from Reserve Bank of India (RBI) called ? ",
            "answer": 0
        }, {
            "options": [
            "Bhagat Singh",
            "Udham Singh",
            "Chandrasekhar Azad",
            "Khudi Ram Bose"
            ],
            "question": "Which revolutionary shot dead Michael O'Dwyer, Lieutenant-Governor of Punjab at the time of Jalliawalan Bagh massacre and believed to be mastermind behind it, in London on 13 March 1940 ? ",
            "answer": 1
        }, {
            "options": [
            "45 degree",
            "90 degree",
            "135 degree",
            "180 degree"
            ],
            "question": "International Date Line, an imaginary line where date changes as one travels east or west across it, passes through which longitude (except some adjustments) ? ",
            "answer": 3
        }, {
            "options": [
            "Operation Vijay",
            "Operation Shakti",
            "Operation Cactus",
            "Operation Bajrang"
            ],
            "question": "What was the code name of rescue operation carried out by Indian armed forces in Maldives, on request from its president, to foil the attempted coup by insurgents in 1988 ? ",
            "answer": 2
        }, {
            "options": [
            "John Ruskin",
            "Leo Tolstoy",
            "Maxim Gorki",
            "Karl Marx"
            ],
            "question": "Who wrote the famous essay 'Unto This Last', which was later translated into Gujarati by Mahatma Gandhi under the title of 'Sarvodaya' (well being of all) ? ",
            "answer": 0
        }, {
            "options": [
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland"
            ],
            "question": "'Ao', 'Sema' and 'Konyak' are the principal languages of which north-eastern Indian state ? ",
            "answer": 3
        }, {
            "options": [
            "Venus",
            "Mercury",
            "Jupiter",
            "Saturn"
            ],
            "question": "In Solar System, which planet is the hottest ? ",
            "answer": 0
        }, {
            "options": [
            "L.B.Shastri",
            "Charan Singh",
            "Morarji Desai",
            "Chandrasekhar"
            ],
            "question": "Which former Indian Prime Minister's birthday on 23 December is celebrated as 'Kisan Divas' (Farmer's Day) in India ? ",
            "answer": 1
        }, {
            "options": [
            "Louis Pasteur",
            "Edward Jenner",
            "Alexander Fleming",
            "Robert Koch"
            ],
            "question": "In 1885, who developed the vaccine for rabies ? ",
            "answer": 0
        }, {
            "options": [
            "Bhagat Singh",
            "Veer Savarkar",
            "Lala Har Dayal",
            "Chandrasekhar Azad"
            ],
            "question": "Which revolutionary was the first to describe the 'Revolt of 1857' as 'India's First War of Independence' in his famous book titled 'The Indian War of Independence' ?",
            "answer": 1
        }, {
            "options": [
            "Adolf Hitler",
            "Joseph Stalin",
            "Napoleon Bonaparte",
            "Mao Zedong"
            ],
            "question": "Who among the following was also known as the 'Little Corporal' ? ",
            "answer": 2
        }, {
            "options": [
            "Kanpur - Lucknow",
            "Mumbai - Pune",
            "Chandigarh - New Delhi",
            "Bengaluru - Chennai"
            ],
            "question": "On 26 November 1960, between which cities was the first Subscriber Trunk Dialling (STD) service started in India ? ",
            "answer": 0
        }, {
            "options": [
            "Arctic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Atlantic Ocean"
            ],
            "question": "Diego Garcia island, being used as a strategic American military base since 1966 when USA received it on lease for 50 years from UK, is located in which ocean ? ",
            "answer": 1
        }, {
            "options": [
            "Tyson Gay",
            "Asafa Powell",
            "Maurice Greene",
            "Usain Bolt"
            ],
            "question": "Which athlete won 100 m race Gold Medal at Beijing Olympic 2008, and also created new world record of 9.69 seconds ? ",
            "answer": 3
        }, {
            "options": [
            "Vienna (Austria)",
            "Brussels (Belgium)",
            "Lyon (France)",
            "The Hague (Netherlands)"
            ],
            "question": "Which city houses the headquarters of the INTERPOL (International Criminal Police Organisation), the world's largest international police organisation ? ",
            "answer": 2
        }, {
            "options": [
            "Bering Strait",
            "Palk Strait",
            "Strait of Gibraltar",
            "Strait of Magellan"
            ],
            "question": "Which waterbody seprates the India from the island nation of Sri Lanka ? ",
            "answer": 1
        }, {
            "options": [
            "Ajmer",
            "Delhi",
            "Mumbai",
            "Srinagar"
            ],
            "question": "The dargah (tomb) of sufi saint Hazarat Nizamuddin Aulia is located in which city ? ",
            "answer": 1
        }, {
            "options": [
            "Indira Gandhi",
            "Lata Mangeshkar",
            "Sarojini Naidu",
            "M.S.Subbulakshmi"
            ],
            "question": "Who among the following is also known as 'Bhartiya Kokila' (The Nightingale of India) ? ",
            "answer": 2
        }, {
            "options": [
            "Copper",
            "Lignite",
            "Bauxite",
            "Iron Ore"
            ],
            "question": "Which mineral is mined at Khetri in Rajasthan ? ",
            "answer": 0
        }, {
            "options": [
            "Nadir Shah",
            "Mahmud Ghazni",
            "Ahmed Shah Abdali",
            "Muhammad Bin Qasim"
            ],
            "question": "Which foreign invader defeated the Marathas in the Third Battle of Panipat (1761) ? ",
            "answer": 2
        }, {
            "options": [
            "Tankara (Gujarat)",
            "Navadwip (W.Bengal)",
            "Tiruchuzhi (T.Nadu)",
            "Kalady (Kerala)"
            ],
            "question": "In which village was Adi Shankaracharya born ? ",
            "answer": 3
        }, {
            "options": [
            "CPI",
            "CPI(M)",
            "Congress",
            "BJP"
            ],
            "question": "To which political party is the trade union All India Trade Union Congress (AITUC) affiliated ? ",
            "answer": 0
        }, {
            "options": [
            "Rajaraja Chola I",
            "Parakrama Pandiyan",
            "Krishna Deva Raya",
            "Narsimhavarman II"
            ],
            "question": "Which medieval ruler authored Telugu work 'Amukta Malyada' ? ",
            "answer": 2
        }, {
            "options": [
            "Kazakhstan",
            "Kyrgyzstan",
            "Tajikistan",
            "Uzbekistan"
            ],
            "question": "Tashkent city, where the Indian Prime Minister L.B.Shastri signed a peace agreement 'Tashkent Declaration' with Pakistani President Ayub Khan in 1966, is capital of which country ? ",
            "answer": 3
        }, {
            "options": [
            "Dennis Tito",
            "Mark Shuttleworth",
            "Gregory Olsen",
            "Charles Simonyi"
            ],
            "question": "On 26 March 2009, who became the first tourist to go into the space twice ? ",
            "answer": 3
        }, {
            "options": [
            "Aravali",
            "Vindhyas",
            "Sahyadri (W.Ghats)",
            "Satpura"
            ],
            "question": "Anamudi Peak, located in the Idukki district of Kerala, is the highest peak of which Indian mountain range ? ",
            "answer": 2
        }, {
            "options": [
            "Harshavardhana",
            "Pulkeshin II",
            "Chandragupta Maurya",
            "Chandragupta Vikramaditaya"
            ],
            "question": "'Kalidas' and 'Varahamihira' were the courtier of which ancient Indian ruler ? ",
            "answer": 3
        }, {
            "options": [
            "Thyroid",
            "Adrenal",
            "Pancreas",
            "Pituitary"
            ],
            "question": "The insulin, a necessary harmone to absorb glucose (sugar) from the blood, is produced by which endocrine gland in human body ? ",
            "answer": 2
        }, {
            "options": [
            "Mahatma Gandhi",
            "Subhash Chandra Bose",
            "Bal Gangadhar Tilak",
            "Bhagat Singh"
            ],
            "question": "'Swaraj (self-rule) is my birthright and I shall have it !' slogan was given by which freedom fighter ? ",
            "answer": 2
        }, {
            "options": [
            "Coal",
            "Iron",
            "Petrol",
            "Aluminium"
            ],
            "question": "'Peat', 'Bituminous', 'Lignite' and 'Anthrasite' are the varieties of which item ? ",
            "answer": 0
        }, {
            "options": [
            "Iraq",
            "Iran",
            "Qatar",
            "Yemen"
            ],
            "question": "Which Asian country was formerly known as 'Persia' ? ",
            "answer": 1
        }, {
            "options": [
            "Karnataka",
            "Maharashtra",
            "Madhya Pradesh",
            "Andhra Pradesh"
            ],
            "question": "Built across the Godavari river, Pochampad Dam is located in which state ? ",
            "answer": 3
        }, {
            "options": [
            "354 days",
            "358 days",
            "362 days",
            "365 days"
            ],
            "question": "How many approximate days are there in the Hijri (Islamic) Calender, the lunar calendar based on year 622 AD when Prophet Muhammed emigrated to Madina ? ",
            "answer": 0
        }, {
            "options": [
            "Kiran Desai",
            "Manju Kapur",
            "Jhumpa Lahiri",
            "Arundhati Roy"
            ],
            "question": "Which Indian lady writer won the Commonwealth Award for her first novel 'Difficult Daughters' ? ",
            "answer": 1
        }, {
            "options": [
            "Butterfly",
            "Backstroke",
            "Front Crawl (Freestyle)",
            "Breaststroke"
            ],
            "question": "Among the following four official styles in the competitive swimming, which swimming style is the slowest ? ",
            "answer": 3
        }, {
            "options": [
            "Hajipur (Bihar)",
            "Allahabad (U.P.)",
            "Gorakhpur (U.P.)",
            "Jabalpur (M.P.)"
            ],
            "question": "Which city houses the headquarters of the North Eastern Railway (NER) ? ",
            "answer": 2
        }, {
            "options": [
            "Gas",
            "Solid",
            "Liquid",
            "Plasma"
            ],
            "question": "In which medium does the sound travel the fastest ? ",
            "answer": 1
        }, {
            "options": [
            "Lal Bahadur Shastri",
            "Maulana Abul Kalam Azad",
            "Vallabhbhai Patel",
            "M.G.Ramachandran"
            ],
            "question": "Who was the first person to be awarded the Bharat Ratna posthumously ? ",
            "answer": 0
        }, {
            "options": [
            "Damodar",
            "Mahanadi",
            "Hooghly",
            "Gandak"
            ],
            "question": "Which river is also known as 'Bengal's sorrow' ? ",
            "answer": 0
        }, {
            "options": [
            "Bengaluru",
            "Chandigarh",
            "Gandhinagar",
            "Hyderabad"
            ],
            "question": "In which Indian city would you find the Rock Garden, a sculpture garden created by artist Nek Chand using waste especially rags and broken ceramics ? ",
            "answer": 1
        }, {
            "options": [
            "Mandal Commission",
            "Liberhan Commission",
            "Sarkaria Commission",
            "Mukherjee Commission"
            ],
            "question": "Which Commission is inquiring into the demolition of Babri Masjid structure at Ayodhya on 6th December 1992 ? ",
            "answer": 1
        }, {
            "options": [
            "Squash",
            "Table Tennis",
            "Lawn Tennis",
            "Badminton"
            ],
            "question": "With which sport are the 'Thomas Cup', 'Uber Cup' and 'Sudirman Cup' tournaments associated ? ",
            "answer": 3
        }, {
            "options": [
            "Curzon Line",
            "MacMahon Line",
            "Durand Line",
            "Radcliffe Line"
            ],
            "question": "Which among the following boundary line seprates Pakistan from Afghanistan ? ",
            "answer": 2
        }, {
            "options": [
            "Edward Jenner",
            "Louis Pasteur",
            "Alexander Fleming",
            "Albert Sabin"
            ],
            "question": "The first Polio vaccine in form of 'injected dose' was developed by Jonas Salk in 1952. Later, who developed first Oral Polio Vaccine (OPV) in sixties ? ",
            "answer": 3
        }, {
            "options": [
            "E.M.Forster",
            "Charles Dickens",
            "Rudyard Kipling",
            "George Orwell"
            ],
            "question": "Who coined commonly used phrases 'Big Brother',   'Doublethink',   'Newspeak' and   'Thought Police' in his famous novel 'Nineteen Eighty-Four' ? ",
            "answer": 3
        }, {
            "options": [
            "Orissa",
            "Gujarat",
            "Maharashtra",
            "Andhra Pradesh"
            ],
            "question": "'Pattachitra' style of painting is native of which Indian state ? ",
            "answer": 0
        }, {
            "options": [
            "Benelux",
            "Gamelan Council",
            "Peninsula Shield",
            "World Bank"
            ],
            "question": "What is more popular name of International Bank for Reconstruction and Development (IBRD) ? ",
            "answer": 3
        }, {
            "options": [
            "Puri (Orissa)",
            "Mumbai (Maharashtra)",
            "Chennai (Tamil Nadu)",
            "Kozhikode (Kerala)"
            ],
            "question": "Marina Beach, the India's longest and world's second longest beach, is located in which city ? ",
            "answer": 2
        }, {
            "options": [
            "Rice",
            "Wheat",
            "Coffee",
            "Tea"
            ],
            "question": "'Green', 'Black', 'White' and 'Oolong' are the varieties of which common day consumption item ? ",
            "answer": 3
        }, {
            "options": [
            "C.N.Annadurai",
            "V.Gopalaswamy",
            "M.G.Ramachandran",
            "N.T.Ramarao"
            ],
            "question": "Who founded the political party Dravida Munnetra Kazhakam (DMK) ? ",
            "answer": 0
        }, {
            "options": [
            "Lord Dalhousie",
            "Lord Canning",
            "Lord Northbrook",
            "Lord Auckland"
            ],
            "question": "Who was the Governor General of India during the India's First War of Independence in 1857 ? ",
            "answer": 1
        }, {
            "options": [
            "V.V.Giri",
            "R.Venkataraman",
            "N.Sanjiva Reddy",
            "S.Radhakrishnan"
            ],
            "question": "Which former President of India authored the book 'Without Fear or Favour' ? ",
            "answer": 2
        }, {
            "options": [
            "Abid Ali",
            "Nilesh Kulkarni",
            "Narendra Hirwani",
            "Ravi Shastri"
            ],
            "question": "Who is the only Indian bowler to have taken a wicket on the very first ball of his international cricket career ? ",
            "answer": 1
        }, {
            "options": [
            "Amending Bills",
            "Money and finance Bills",
            "Expiring Laws (Continuance) Bills",
            "Constitutional Amendment Bills"
            ],
            "question": "In Indian Parliament, which among the following Bill can be introduced only in Lok Sabha ? ",
            "answer": 1
        }, {
            "options": [
            "INS Vela",
            "INS Vagli",
            "INS Shankul",
            "INS Shalki"
            ],
            "question": "Which among the following is the India's first indigenously built submarine ? ",
            "answer": 3
        }, {
            "options": [
            "Beijing",
            "Shanghai",
            "Guangzhou",
            "Shenzhen"
            ],
            "question": "Which Chinese city, also known as 'City of Goats', will host 16th Asian Games (XVI Asiad) in 2010 ? ",
            "answer": 2
        }, {
            "options": [
            "Anemia",
            "Adrenalitis",
            "Anorexia",
            "Aminoaciduria"
            ],
            "question": "A qualitative or quantitative deficiency of the hemoglobin leads to which disorder ? ",
            "answer": 0
        }, {
            "options": [
            "Gomti",
            "Ganga",
            "Saryu",
            "Yamuna"
            ],
            "question": "On the banks of which river is the holy city Ayodhya located ? ",
            "answer": 2
        }, {
            "options": [
            "Cork",
            "Hemp",
            "Linen",
            "Silk"
            ],
            "question": "Which among the following is not obtained from plants ? ",
            "answer": 3
        }, {
            "options": [
            "T.Swaminathan",
            "S.P.Sen Verma",
            "S.L.Shakdhar",
            "Sukumar Sen"
            ],
            "question": "On 21 March 1950, who became the first Chief Election Commissioner (CEC) of India ? ",
            "answer": 3
        }, {
            "options": [
            "Kanha National Park",
            "Kaziranga National Park",
            "Kanchenjunga National Park",
            "Kanger Ghati National Park"
            ],
            "question": "Which among the following National Park is located in Bastar district in Chhattisgarh ? ",
            "answer": 3
        }, {
            "options": [
            "Ranjit Singh",
            "Hari Singh Nalwa",
            "Banda Bahadur",
            "Zorawar Singh"
            ],
            "question": "Whom did the tenth and last Sikh Guru Gobind Singh appoint his military deputy ? ",
            "answer": 2
        }, {
            "options": [
            "A.O.Hume",
            "William Jones",
            "C.F.Andrews",
            "Alfred Webb"
            ],
            "question": "In 1784, who founded the Asiatic Society in Kolkata for inquiry into the history and antiquities, the arts, sciences, and literature of Asia ? ",
            "answer": 1
        }, {
            "options": [
            "Vienna (Austria)",
            "Berne (Switzerland)",
            "The Hague (Netherlands)",
            "Brussels (Belgium)"
            ],
            "question": "Which city houses the headquarters of the Universal Postal Union (UPU), an international organisation that coordinates the world-wide postal system ? ",
            "answer": 1
        }, {
            "options": [
            "Enewetak",
            "Pearl and Hermes",
            "Okinotorishima",
            "Bikini"
            ],
            "question": "On 1 November 1952, at which atoll in the Pacific Ocean was the world's first Hydrogen Bomb test (code-named Mike) conducted ? ",
            "answer": 0
        }, {
            "options": [
            "Lotus Petal",
            "Maple Leaf",
            "Peepul Leaf",
            "Banyan Leaf"
            ],
            "question": "In what shape is the medal of the Bharat Ratna award designed ? ",
            "answer": 2
        }, {
            "options": [
            "A",
            "B",
            "AB",
            "O"
            ],
            "question": "Which blood group is the universal recipient ? ",
            "answer": 2
        }, {
            "options": [
            "Raipur (Chattisgarh)",
            "Ranchi (Jharkhand)",
            "Dehradun (Uttarakhand)",
            "Bhopal (Madhya Pradesh)"
            ],
            "question": "Which city is served by Birsa Munda Airport ? ",
            "answer": 1
        }, {
            "options": [
            "Basenji",
            "Dalmatian",
            "German Shepherd",
            "Chihuahua"
            ],
            "question": "Which is the only breed of dog that can't bark ? ",
            "answer": 0
        }, {
            "options": [
            "Uttarakhand",
            "Jammu  Kashmir",
            "Himachal Pradesh",
            "Sikkim"
            ],
            "question": "In which Indian state is the Rumtek Monastery, a famous Tibetan Buddhist monastery, located ? ",
            "answer": 3
        }, {
            "options": [
            "Baba Amte",
            "Anna Hazare",
            "Swami Agnivesh",
            "Bindeshwar Pathak"
            ],
            "question": "For improving civic sanitation, who founded the Sulabh International in 1970 ? ",
            "answer": 3
        }, {
            "options": [
            "Anita Desai",
            "Kiran Desai",
            "Arundhati Roy",
            "Jhumpa Lahiri"
            ],
            "question": "Which Indian lady writer won the 2006 Booker Prize for her novel 'The Inheritance of Loss' ? ",
            "answer": 1
        }, {
            "options": [
            "France",
            "Germany",
            "Belgium",
            "Norway"
            ],
            "question": "Which country is popularly known as the 'Cockpit of Europe' ? ",
            "answer": 2
        }, {
            "options": [
            "Chetan Sharma",
            "Irfan Pathan",
            "Harbhajan Singh",
            "Kapil Dev"
            ],
            "question": "Who was the first Indian cricketer to take Hat Trick in One Day International (ODI) cricket ? ",
            "answer": 0
        }, {
            "options": [
            "Mumbai",
            "Hyderabad",
            "Chandigarh",
            "Bengaluru"
            ],
            "question": "In which city is the International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI) located ? ",
            "answer": 1
        }, {
            "options": [
            "TNT",
            "RDX",
            "HMX",
            "Dynamite"
            ],
            "question": "By invention of which explosive did Alfred Bernhard Nobel amass enormous wealth, later used by him to institute Nobel Prizes ? ",
            "answer": 3
        }, {
            "options": [
            "Yak",
            "Lion",
            "Deer",
            "Leopard"
            ],
            "question": "'Clouded' and 'Snow' are the species of which Indian mammal ? ",
            "answer": 3
        }, {
            "options": [
            "Charles Darwin",
            "Issac Newton",
            "Albert Einstein",
            "Gregor Mendel"
            ],
            "question": "In 1687, who propounded the Law of Gavity ? ",
            "answer": 1
        }, {
            "options": [
            "Sudan",
            "Egypt",
            "Uganda",
            "Tanzania"
            ],
            "question": "'Gift of the Nile' is the nickname of which African country ? ",
            "answer": 1
        }, {
            "options": [
            "Brain",
            "Lungs",
            "Liver",
            "Kidney"
            ],
            "question": "Encephalitis disease affects which part of the body ? ",
            "answer": 0
        }, {
            "options": [
            "Gold",
            "Silver",
            "Diamond",
            "Copper"
            ],
            "question": "Which mineral is mined at Golkonda in Andhra Pradesh ? ",
            "answer": 2
        }, {
            "options": [
            "Unix",
            "Windows XP",
            "Visual Basic",
            "Linux"
            ],
            "question": "Which among the following is not a computer Operating System ? ",
            "answer": 2
        }, {
            "options": [
            "P.T.Usha",
            "Shiny Abraham",
            "Jyotirmay Sikdar",
            "M.D.Valsamma"
            ],
            "question": "'Golden Girl' book is the autobiography of which Indian woman athlete ? ",
            "answer": 0
        }, {
            "options": [
            "Netravati",
            "Dandavathi",
            "Vrishabhavati",
            "Sharavathi"
            ],
            "question": "'Raja', 'Rani', 'Rocket' and 'Roarer' falls, collectively known as Jog Falls or Gersoppa Falls, are formed by which river in Karnataka ? ",
            "answer": 3
        }, {
            "options": [
            "Ezhimala (Kerala)",
            "Karwar (Karnataka)",
            "Visakhapatnam (A.P.)",
            "Okha (Gujarat)"
            ],
            "question": "On 8 January 2009, at which place in Kerala did Prime Minister Manmohan Singh commission the Asia's biggest Naval Academy ? ",
            "answer": 0
        }, {
            "options": [
            "Chikan",
            "Batik",
            "Phulkari",
            "Chain Stitch"
            ],
            "question": "Native to the island of Java in Indonesia, which among the following is a wax-resist dyeing technique used on textile ? ",
            "answer": 1
        }, {
            "options": [
            "Junagarh (Gujarat)",
            "Pushkar (Rajasthan)",
            "Sonepur (Bihar)",
            "Ahmedabad (Gujarat)"
            ],
            "question": "In which city, situated at the confluence of sacred rivers Ganga and Gandak, is the biggest cattle fair of Asia held on Kartik Purnima ? ",
            "answer": 2
        }, {
            "options": [
            "Indira Gandhi",
            "Lal Bahadur Shastri",
            "Jawaharlal Nehru",
            "Morarji Desai"
            ],
            "question": "In 1969, under whose Prime Ministership were 14 private banks nationalised ? ",
            "answer": 0
        }, {
            "options": [
            "Long Jump",
            "Triple Jump",
            "3000 m steeplechase",
            "4 x 400 m Relay"
            ],
            "question": "'Baton' is used in which athletic event ? ",
            "answer": 3
        }, {
            "options": [
            "Viscosity",
            "Surface Tension",
            "Polarization",
            "Buoyancy"
            ],
            "question": "Due to which physical property does the water drop take round (spherical) shape ? ",
            "answer": 1
        }, {
            "options": [
            "Sun Temple, Konark",
            "Jagannath Temple, Puri",
            "Lingaraja Temple, Bhubaneswar",
            "Meenakshi Temple, Madurai"
            ],
            "question": "Which chariot-shaped temple, built by King Narasimha Deva I of Ganga dynasty in 13th century, is also known as the 'Black Pagoda' ? ",
            "answer": 0
        }, {
            "options": [
            "Eight",
            "Twelve",
            "Fifteen",
            "Eighteen"
            ],
            "question": "How many Schedules (lists that categorizes bureaucratic activity and policy of the government) does the Constitution of India have ? ",
            "answer": 1
        }, {
            "options": [
            "Benin",
            "Belize",
            "Malawi",
            "Suriname"
            ],
            "question": "Which country was formerly known as 'Dutch Guyana' ? ",
            "answer": 3
        }, {
            "options": [
            "Kalhana",
            "Banabhatta",
            "Bhavabhuti",
            "Ashvagosh"
            ],
            "question": "Who authored the 'Buddhacharita', a Sanskrit narrative on the life of Gautam Buddha ? ",
            "answer": 3
        }, {
            "options": [
            "Brussels (Belgium)",
            "Vienna (Austria)",
            "Paris (France)",
            "Geneva (Switzerland)"
            ],
            "question": "In which European city are the headquarters of United Nations Educational, Scientific and Cultural Organisation (UNESCO) located ? ",
            "answer": 2
        }, {
            "options": [
            "Ashok",
            "Dasarath Maurya",
            "Bindusara",
            "Chandragupta Maurya"
            ],
            "question": "Which Maurya ruler sent his son Mahindra and daughter Sanghamitra to Tamraparni (present name Sri Lanka) for propogation of Buddhism ? ",
            "answer": 0
        }, {
            "options": [
            "Ethane",
            "Methane",
            "Butane",
            "Propane"
            ],
            "question": "Which gas, abundantly produced in swamps and marshes by the action of bacteria on dead vegetation, is commonly referred as 'Marsh Gas' ? ",
            "answer": 1
        }, {
            "options": [
            "Free Music",
            "Free Mobile",
            "Frequency Modulation",
            "Frequency Multiplication"
            ],
            "question": "With reference to Radio broadcasting, what is the full form of `FM' ? ",
            "answer": 2
        }, {
            "options": [
            "Annie Besant",
            "Gopal Krishna Gokhale",
            "Mahdev Govind Ranade",
            "Bal Gangadhar Tilak"
            ],
            "question": "In 1916, who founded Home Rule League in Poona (Pune) ? ",
            "answer": 3
        }, {
            "options": [
            "Galvanisation",
            "Volcanisation",
            "Pasteurisation",
            "Hydrogenation"
            ],
            "question": "By which process liquid Vegetable Oil is converted to solid Vanaspati Ghee ? ",
            "answer": 3
        }, {
            "options": [
            "Ruma Pal",
            "Leila Seth",
            "Anna Chandy",
            "M. Fateema Bivi"
            ],
            "question": "In 1991, who became the first woman Chief Justice of a High Court in India ? ",
            "answer": 1
        }, {
            "options": [
            "Bhoodan Movement",
            "Narmada Bachao Andolan",
            "Chipko Movement",
            "Sampoorna Kranti"
            ],
            "question": "In which movement did social activist Sunderlal Bahuguna play a prominent role ? ",
            "answer": 2
        }, {
            "options": [
            "Chennai",
            "New Delhi",
            "Bengaluru",
            "Hyderabad"
            ],
            "question": "Which Indian city hosted the first Afro-Asian Games in 2003 ? ",
            "answer": 3
        }, {
            "options": [
            "Karl Benz",
            "David Bushnell",
            "Christopher Cockerell",
            "Etienne Oehmichen"
            ],
            "question": "Who invented Hovercraft ? ",
            "answer": 2
        }, {
            "options": [
            "Narsi Mehta",
            "Sant Tukaram",
            "Goswami Tulsidas",
            "Sant Gyaneshwar"
            ],
            "question": "Who created Mahatma Gandhi's favorite bhajan 'Vaishnav jan to tene kahiye' ? ",
            "answer": 0
        }, {
            "options": [
            "Almora",
            "Dehradun",
            "Haridwar",
            "Roorkee"
            ],
            "question": "Which city, founded by Udasi Sikhs Guru Ram Rai, is capital of Uttarakhand ?",
            "answer": 1
        }, {
            "options": [
            "7",
            "8",
            "9",
            "10"
            ],
            "question": "In addition to five permanemt members, how many non-permanent members does UN Security Council have ?",
            "answer": 3
        }, {
            "options": [
            "Ropar (Punjab)",
            "Banawali (Haryana)",
            "Kalibangan (Rajasthan)",
            "Lothal (Gujarat)"
            ],
            "question": "At which of the following Indus valley civilization site would you come across world's earliest known dock ?",
            "answer": 3
        }, {
            "options": [
            "Ruskin Bond",
            "R.K.Narayan",
            "Rudyard Kipling",
            "Rabindranath Tagore"
            ],
            "question": "Who created the fictional character 'Swami' in his debut novel 'Swami and Friends' ?",
            "answer": 1
        }, {
            "options": [
            "Arctic Ocean",
            "Indian Ocean",
            "Atlantic Ocean",
            "Pacific Ocean"
            ],
            "question": "Which ocean is popularly known as the 'Herring Pond' ?",
            "answer": 2
        }, {
            "options": [
            "M.S.Golwalkar",
            "Keshava Baliram Hedgewar",
            "Lala Har Dayal",
            "Vir Savarkar"
            ],
            "question": "In 1925, who founded the Rashtriya Swayamsevak Sangh (RSS) in Nagpur ?",
            "answer": 1
        }, {
            "options": [
            "Lead",
            "Iron",
            "Mercury",
            "Aluminium"
            ],
            "question": "Galena is the principal ore of which element ?",
            "answer": 0
        }, {
            "options": [
            "Kaveri",
            "Vaigai",
            "Pamba",
            "Periyar"
            ],
            "question": "Idukki Dam in Kerala is built across which river ?",
            "answer": 3
        }, {
            "options": [
            "Baaz",
            "Vajra",
            "Shamsher",
            "Gajraj"
            ],
            "question": "By what Indian name is the fighter aircraft 'Jaguar', jointly developed by Britain and France, inducted into Indian Air Force (IAF) fleet ?",
            "answer": 2
        }, {
            "options": [
            "Ipoh",
            "Klang",
            "Kuching",
            "Kuala Lumpur"
            ],
            "question": "On 12 April 2009, at which Malaysian city did India win Sultan Azlan Shah Cup hockey tournament by defeating hosts Malaysia ?",
            "answer": 0
        }, {
            "options": [
            "Mumbai",
            "New Delhi",
            "Chennai",
            "Kolkata"
            ],
            "question": "In which city is the Lotus Temple, the Bahai house of worship, located ? ",
            "answer": 1
        }, {
            "options": [
            "Narmada",
            "Godavari",
            "Sabarmati",
            "Krishna"
            ],
            "question": "On the banks of which river, did Mahatma Gandhi establish Satyagraha Ashram in Ahmedabad ? ",
            "answer": 2
        }, {
            "options": [
            "Sulphur",
            "Phosphorus",
            "Silicon",
            "Chromium"
            ],
            "question": "What element is added to steel (which is iron with a little carbon) to make stainless steel ? ",
            "answer": 3
        }, {
            "options": [
            "Balban",
            "Aram Shah",
            "Iltutmish",
            "Qutbuddin Aybak"
            ],
            "question": "In 1206, who founded the Mamluk Dynasty, also called Slave Dynasty, in India ? ",
            "answer": 3
        }, {
            "options": [
            "Operation Shakti",
            "Operation Vijay",
            "Operation Cactus",
            "Operation Ashwamedh"
            ],
            "question": "What was the code name of five nuclear tests conducted by India in May 1998, near Pokhran in Rajasthan ? ",
            "answer": 0
        }, {
            "options": [
            "Punjab",
            "Kerala",
            "Manipur",
            "Maharashtra"
            ],
            "question": "'Thang-Ta' martial art is native of which Indian state ? ",
            "answer": 2
        }, {
            "options": [
            "Amartya Sen",
            "Jagdish Bhagwati",
            "Manmohan Singh",
            "Nani Palkhivala"
            ],
            "question": "'The Argumentative Indian' book was authored by which Indian ecomonist ? ",
            "answer": 0
        }, {
            "options": [
            "Kozhikode",
            "Palakkad",
            "Ernakulam",
            "Thrissur"
            ],
            "question": "In 1990, which district of Kerala became the first fully literate district of India ? ",
            "answer": 2
        }, {
            "options": [
            "Thalamus",
            "Hypothalamus",
            "Hippocampus",
            "Medulla"
            ],
            "question": "In humans, which portion of brain controls hunger, thirst and body temprature ? ",
            "answer": 1
        }, {
            "options": [
            "Stanley Baldwin",
            "Clement Attlee",
            "Winston Churchill",
            "Neville Chamberlain"
            ],
            "question": "Who was the Prime Minister of Britain when India got independence ? ",
            "answer": 1
        }, {
            "options": [
            "Vitamin A",
            "Vitamin B",
            "Vitamin C",
            "Vitamin D"
            ],
            "question": "Citrus fruits are considered a rich source of which vitamin ? ",
            "answer": 2
        }, {
            "options": [
            "C.F.Andrews",
            "Vinoba Bhave",
            "Jamnalal Bajaj",
            "Vallabhbhai Patel"
            ],
            "question": "Which close associate of Mahatma Gandhi was popularly known as 'Deenbandhu' ? ",
            "answer": 0
        }, {
            "options": [
            "Punjab",
            "Haryana",
            "Maharashtra",
            "Gujarat"
            ],
            "question": "Which is the first Indian state to have electrified all of its villages ? ",
            "answer": 1
        }, {
            "options": [
            "Red Panda",
            "Giant Panda",
            "Rhinoceros",
            "Cheetah"
            ],
            "question": "Which bamboo eating member of bear family is the symbol of World Wide Fund For Nature (WWF) ? ",
            "answer": 1
        }, {
            "options": [
            "R.K.Narayan",
            "Mulk Raj Anand",
            "Khushwant Singh",
            "Dharamvir Bharti"
            ],
            "question": "Who wrote the novel 'Train to Pakistan' ? ",
            "answer": 2
        }, {
            "options": [
            "9 January",
            "12 January",
            "15 January",
            "30 January"
            ],
            "question": "On which date, the arrival date of Mahatma Gandhi in India from South Africa, is the Pravasi Bharatiya Divas celebrated ? ",
            "answer": 0
        }, {
            "options": [
            "Barium",
            "Sodium",
            "Manganese",
            "Strontium"
            ],
            "question": "For red colour, compounds of which element are commonly used in fireworks ? ",
            "answer": 3
        }, {
            "options": [
            "Delhi High Court, New Delhi",
            "Karnataka High Court, Bengaluru",
            "Gujarat High Court, Ahmedabad",
            "Bombay High Court, Mumbai"
            ],
            "question": "On 9 February 2009, in which High Court did the first e-Court of India start functioning on a pilot basis ? ",
            "answer": 2
        }, {
            "options": [
            "Shimla (H.P.)",
            "Jodhpur (Rajasthan)",
            "Dehradun (Uttarakhand)",
            "Jabalpur (M.P.)"
            ],
            "question": "In which city is the Tropical Forest Research Institute (TFRI) located ? ",
            "answer": 3
        }, {
            "options": [
            "Mohammed Iqbal",
            "Khan Abdul Gaffar Khan",
            "Maulana Abul Kalam Azad",
            "Morarji Desai"
            ],
            "question": "Who is the only person to be honoured with both 'Bharat Ratna' and 'Nishan-e-Pakistan', the highest civilian awards of India and Pakistan respectively ? ",
            "answer": 3
        }, {
            "options": [
            "Nikkei",
            "Sensei",
            "Bonsai",
            "Origami"
            ],
            "question": "What is the name of Japanese art of aesthetic miniaturization of trees, by growing them in containers ? ",
            "answer": 2
        }, {
            "options": [
            "Demand Draft",
            "Credit Card",
            "Gift Cheque",
            "Bearer Cheque"
            ],
            "question": "Which among the following is popularly referred as 'Plastic Money' ? ",
            "answer": 1
        }, {
            "options": [
            "Europe",
            "Australia",
            "South America",
            "Antarctica"
            ],
            "question": "In terms of area, which is the smallest continent ? ",
            "answer": 1
        }, {
            "options": [
            "Lanka Dahan (1917)",
            "Raja Harishchandra (1913)",
            "Kapala Kundala (1929)",
            "Alam Ara (1931)"
            ],
            "question": "Which was the first 'talkie' feature film made and shown in India ? ",
            "answer": 3
        }, {
            "options": [
            "Major Shaitan Singh",
            "Naik Jadu Nath Singh",
            "Major Som Nath Sharma",
            "Major Dhan Singh Thapa"
            ],
            "question": "Who was the first soldier of the Indian armed forces to be awarded Param Vir Chakra, the highest military award of India ? ",
            "answer": 2
        }, {
            "options": [
            "Chola Empire",
            "Maurya Empire",
            "Kushan Empire",
            "Vijayanagar Empire"
            ],
            "question": "Which medieval empire did Harihar I and Bukka Raya I found in 1336 ? ",
            "answer": 3
        }, {
            "options": [
            "Cambodia",
            "Thailand",
            "Indonesia",
            "Taiwan"
            ],
            "question": "Which country was formerly known as 'Formosa' ? ",
            "answer": 3
        }, {
            "options": [
            "Roorkee (Uttarakhand)",
            "Cuttack (Orissa)",
            "Nagpur (Maharashtra)",
            "Karnal (Haryana)"
            ],
            "question": "In which city is the Central Building Research Institute located ? ",
            "answer": 0
        }, {
            "options": [
            "Harshavardhana",
            "Chandragupta Maurya",
            "Chandragupta Vikramaditya",
            "Krishna Deva Raya"
            ],
            "question": "'Nagananda', 'Ratnavali' and 'Priyadarshika'  Sanskrit works were authored by which ruler ? ",
            "answer": 0
        }, {
            "options": [
            "Venus",
            "Mercury",
            "Jupiter",
            "Saturn"
            ],
            "question": "In Solar System, which planet rotates the fastest on its axis ? ",
            "answer": 2
        }, {
            "options": [
            "Agra",
            "Firozabad",
            "Moradabad",
            "Aligarh"
            ],
            "question": "Which city in Uttar Pradesh is famous for Glass Bangles industry ?",
            "answer": 1
        }, {
            "options": [
            "42 (21 pairs)",
            "44 (22 pairs)",
            "46 (23 pairs)",
            "48 (24 pairs)"
            ],
            "question": "In humans, how many chromosomes does a cell have ?",
            "answer": 2
        }, {
            "options": [
            "Bhagat Singh",
            "Chandrashekhar Azad",
            "Veer Savarkar",
            "Vallabhbhai Patel"
            ],
            "question": "Who was popularly known as the 'Iron Man of India' ?",
            "answer": 3
        }, {
            "options": [
            "Dharmapala",
            "Harshavardhan",
            "Chandragupta Maurya",
            "Chandragupta Vikramaditya"
            ],
            "question": "During the reign of which ancient Indian ruler, did Chinese traveller Fa-Hien visit India ?",
            "answer": 3
        }, {
            "options": [
            "Swami Vivekanand",
            "Swami Dayanand Saraswati",
            "Swami Prabhupad",
            "Ramkrishna Paramahamsa"
            ],
            "question": "By what name is spiritual guru Narendra Nath Datta, founder of Belur Math near Kolkata, better known ?",
            "answer": 0
        }, {
            "options": [
            "Asia",
            "Africa",
            "South America",
            "Antarctica"
            ],
            "question": "'Uhuru Peak' at Mount Kilimanjaro is the highest point of which continent ?",
            "answer": 1
        }, {
            "options": [
            "Paris (France)",
            "London (UK)",
            "Moscow (Russia)",
            "Rome (Italy)"
            ],
            "question": "Millennium Dome, where Priyanka Chopra was crowned Miss World in 2000, is located in which European city ?",
            "answer": 1
        }, {
            "options": [
            "Abraham Lincoln",
            "George Washington",
            "Theodore Roosevelt",
            "John F. Kennedy"
            ],
            "question": "Soft toy 'Teddy Bear' was named after which US president's nickname ?",
            "answer": 2
        }, {
            "options": [
            "Zakir Hussain",
            "Pt. Shiv Kumar Sharma",
            "Pt. Ravi Shankar",
            "Amjad Ali Khan"
            ],
            "question": "In February 2009, which Indian music maestro won the Grammy Award for his collaborative music album 'Golden Drum Project' ?",
            "answer": 0
        }, {
            "options": [
            "Mata Jijabai",
            "Rani Gaidenlou Zeliang",
            "Devi Ahilya Bai Holkar",
            "Kannagi"
            ],
            "question": "Out of five Stree Shakti Puraskar, one is named after a fictional character of Tamil epic 'Silappatikaram'. Which one among the following four ?",
            "answer": 3
        }, {
            "options": [
            "Sunbird",
            "Kingfisher",
            "Honeyeater",
            "Hummingbird"
            ],
            "question": "Which is the only bird that can fly backwards ? ",
            "answer": 3
        }, {
            "options": [
            "Tamil Nadu",
            "West Bengal",
            "Madhya Pradesh",
            "Maharashtra"
            ],
            "question": "'Chanderi' and 'Maheshwari' sarees are native of which state ? ",
            "answer": 2
        }, {
            "options": [
            "Cinchona",
            "Wintergreen",
            "Peppermint",
            "Eucalyptus"
            ],
            "question": "Quinine, the anti-malaria drug, is made from the bark of which tree ? ",
            "answer": 0
        }, {
            "options": [
            "Mars",
            "Jupiter",
            "Saturn",
            "Uranus"
            ],
            "question": "Titan, the only moon (natural satellite) known to have a dense atmosphere, is the largest moon of which planet ? ",
            "answer": 2
        }, {
            "options": [
            "Gupta dynasty",
            "Kanva dynasty",
            "Nanda dynasty",
            "Shunga dynasty"
            ],
            "question": "Which dynasty, founded by Mauryan senapati (commander-in-chief) Pushyamitra, was immediate successor of the Maurya dyanasty ? ",
            "answer": 3
        }, {
            "options": [
            "Kochi (Kerala)",
            "Mangalore (Karnataka)",
            "Ratnagiri (Maharashtra)",
            "Marmagao (Goa)"
            ],
            "question": "Which coastal city is known as the 'Queen of the Arabian Sea' ? ",
            "answer": 0
        }, {
            "options": [
            "France",
            "Poland",
            "Britain",
            "Belgium"
            ],
            "question": "On 1 September 1939, attack on which country by Germany marked the start of World War II ? ",
            "answer": 1
        }, {
            "options": [
            "Salman Rushdie",
            "V.S.Naipaul",
            "Arundhati Roy",
            "Kiran Desai"
            ],
            "question": "In 1981, which Mumbai born British writer won the Booker Prize for his novel 'Midnight's Children' ? ",
            "answer": 0
        }, {
            "options": [
            "Boston",
            "California",
            "Philadelphia",
            "San Francisco"
            ],
            "question": "In 1913, at which American city did Lala Har Dayal found the 'Ghadar Party' ? ",
            "answer": 3
        }, {
            "options": [
            "Chandni Chowk (Delhi)",
            "Outer Delhi (Delhi)",
            "Nandyal (Andhra Pradesh)",
            "Samastipur (Bihar)"
            ],
            "question": "By voter strength, which Indian parliamentary constituency (Lok Sabha seat) having more than 33 lakh voters holds the world record of the largest constituency ? ",
            "answer": 1
        }, {
            "options": [
            "Samrat",
            "Rajdoot",
            "Maharaja",
            "Badshah"
            ],
            "question": "What name has been given to the first Boeing 747/700 jet, inducted into Indian Air Force, designed to work as the Indian President's office-in-the-sky ? ",
            "answer": 1
        }, {
            "options": [
            "Betalain",
            "Chlorophyll",
            "Carotenoid",
            "Anthocyanin"
            ],
            "question": "Which pigment gives plants and leaves their green colour ? ",
            "answer": 1
        }, {
            "options": [
            "Rabindranath Tagore",
            "Tej Bahadur Sapru",
            "Gopal Krishna Gokhle",
            "Syed Ahmed Khan"
            ],
            "question": "As a token of protest against Jallianwala Bagh massacre on 13 April 1919, who returned the Knighthood conferred on him by the British Government ? ",
            "answer": 0
        }, {
            "options": [
            "Sunil Gavaskar",
            "V.V.S.Laxman",
            "Rahul Dravid",
            "Mohammed Azharuddin"
            ],
            "question": "On 6 Apr 2009, which Indian cricketer surpassed Australian Mark Waugh's world record for the most catches in Test Cricket by a fielder (excluding wicket-keeper) ? ",
            "answer": 2
        }, {
            "options": [
            "60 years",
            "62 years",
            "65 years",
            "70 years"
            ],
            "question": "What is the retirement age of High Court judges ? ",
            "answer": 1
        }, {
            "options": [
            "Hygrometer",
            "Chronometer",
            "Thermometer",
            "Sphygmomanometer"
            ],
            "question": "Which apparatus is used to measure the blood pressure ? ",
            "answer": 3
        }, {
            "options": [
            "Protima Gauri Bedi",
            "Sonal Mansingh",
            "Mrinalini Sarabhai",
            "Rukmini Devi Arundale"
            ],
            "question": "Which renowned dancer established classical dance school 'Kalakshetra' at Adyar near Chennai in 1931 ? ",
            "answer": 3
        }, {
            "options": [
            "Gold",
            "Lignite",
            "Bauxite",
            "Iron Ore"
            ],
            "question": "Kudremukh hills, name literally meaning Horse face, in Karnataka are famous for mines of which mineral ? ",
            "answer": 3
        }, {
            "options": [
            "Haryana",
            "Rajasthan",
            "Madhya Pradesh",
            "Karnataka"
            ],
            "question": "Ghatigaon Sanctuary, set up for the conservation of the Son Chiriya (great Indian bustard), is located in which state ? ",
            "answer": 2
        }, {
            "options": [
            "Vikas Swarup",
            "Vikram Seth",
            "Amitav Ghosh",
            "Aravind Adiga"
            ],
            "question": "The novel 'Q  A', on which 8 Oscar awards winning film 'Slumdog Millionaire' (2008) is based, was authored by which Indian civil servant ? ",
            "answer": 0
        }, {
            "options": [
            "Insulin",
            "Adrenaline",
            "Melatonin",
            "Thyroxine"
            ],
            "question": "Which hormone, released when danger threatens, is known as Emergency hormone ? ",
            "answer": 1
        }, {
            "options": [
            "Karnataka",
            "Andhra Pradesh",
            "Tamil Nadu",
            "Kerala"
            ],
            "question": "'Kathakali', 'Mohiniaattam' and 'Thullal' dance forms are native of which state ? ",
            "answer": 3
        }, {
            "options": [
            "Asia",
            "Africa",
            "Antarctica",
            "Australia"
            ],
            "question": "Which is the only continent through which all longitude lines passes ? ",
            "answer": 2
        }, {
            "options": [
            "Jainism",
            "Sikhism",
            "Buddhism",
            "Christianity"
            ],
            "question": "'Vinaya Pitaka', 'Sutta Pitaka' and 'Abhidhamma Pitaka' - collectively known as the 'Tripitaka' (three baskets) - are sacred texts of which religion ? ",
            "answer": 2
        }, {
            "options": [
            "Dev Anand",
            "Raj Kapoor",
            "Amitabh Bachchan",
            "Dilip Kumar"
            ],
            "question": "In 1997, to which Indian film star did Pakistan Government present its highest civilian award 'Nishan-e-Intiaz' ? ",
            "answer": 3
        }, {
            "options": [
            "Yuri Gagarin",
            "Alexey Leonov",
            "Neil Armstrong",
            "Buzz Aldrin"
            ],
            "question": "On 18 March 1965, who became the first human to walk in the space ? ",
            "answer": 1
        }, {
            "options": [
            "Seine",
            "Thames",
            "Potomac",
            "Moskva"
            ],
            "question": "Washington D.C., the capital of United States of America, is located on the banks of which river ? ",
            "answer": 2
        }, {
            "options": [
            "Saras",
            "Tejas",
            "Chetak",
            "Cheetah"
            ],
            "question": "Which among the following is the first indigenous civilian aircraft of India ? ",
            "answer": 0
        }, {
            "options": [
            "Panaji (Goa)",
            "Coimbatore (Tamil Nadu)",
            "Bharatpur (Rajasthan)",
            "Sultanpur (Haryana)"
            ],
            "question": "Near which city is the Salim Ali Centre for Ornithology and Natural History located ? ",
            "answer": 1
        }, {
            "options": [
            "Belize",
            "Malawi",
            "Botswana",
            "Benin"
            ],
            "question": "Which Central American country was formerly known as 'British Honduras' ? ",
            "answer": 0
        }, {
            "options": [
            "18 years",
            "25 years",
            "30 years",
            "35 years"
            ],
            "question": "What is the minimum age limit to become the Governor of a state in India ? ",
            "answer": 3
        }, {
            "options": [
            "Gujarat",
            "Maharashtra",
            "Karnataka",
            "West Bengal"
            ],
            "question": "Yakshagana, literally meaning celestial music, is a popular dance drama of which Indian state ? ",
            "answer": 2
        }, {
            "options": [
            "Narmada",
            "Mahanadi",
            "Godavari",
            "Kaveri"
            ],
            "question": "Hirakud Dam at Sambalpur in Orissa, the longest dam in India, is built across which river ? ",
            "answer": 1
        }, {
            "options": [
            "Tiger",
            "Elephant",
            "Rhinoceros",
            "Horse"
            ],
            "question": "Among terrestrial (land) animals, which animal has the longest gestation period ? ",
            "answer": 1
        }, {
            "options": [
            "Guru Angad",
            "Guru Amar Das",
            "Guru Ram Das",
            "Guru Arjan"
            ],
            "question": "For writing the Punjabi language, which Sikh guru developed the Gurumukhi script ? ",
            "answer": 0
        }, {
            "options": [
            "Malaria",
            "Kala-Azar",
            "Dengue Fever",
            "Typhoid"
            ],
            "question": "Which among the following disease is caused by female Aedes Aegypti mosquitoes ? ",
            "answer": 2
        }, {
            "options": [
            "Pol Pot",
            "Idi Amin",
            "Adolf Hitler",
            "Joseph Stalin"
            ],
            "question": "'Mein Kampf' (My Struggle) book is the autobiography of which dictator ? ",
            "answer": 2
        }, {
            "options": [
            "Vladimir Putin (Russian President)",
            "Nicolas Sarkozy (French President)",
            "Zigme Singye Wangchuk (Bhutan King)",
            "Nursultan Nazarbayev (Kazakhstan President)"
            ],
            "question": "Who was the chief guest at the Republic Day celebrations on 26th January 2009 in New Delhi ? ",
            "answer": 3
        }, {
            "options": [
            "Annie Besant",
            "Mahatma Gandhi",
            "Madan Mohan Malaviya",
            "Dhondo Keshav Karve"
            ],
            "question": "In 1916, who founded Shreemati Nathibai Damodar Thackersey (SNDT) Women's University at Pune, the first women's university in India ? ",
            "answer": 3
        }, {
            "options": [
            "Nairobi (Kenya)",
            "Cairo (Egypt)",
            "Abuja (Nigeria)",
            "Addis Ababa (Ethiopia)"
            ],
            "question": "In which African city are the headquarters of United Nations Environment Programme (UNEP) located ? ",
            "answer": 0
        }, {
            "options": [
            "Lactose",
            "Sucrose",
            "Maltose",
            "Fructose"
            ],
            "question": "Which natural sugar is found in the milk ?",
            "answer": 0
        }, {
            "options": [
            "Manipur",
            "Mizoram",
            "Sikkim",
            "Nagaland"
            ],
            "question": "'Nepali', 'Lepcha', 'Bhutia' and 'Limbu' are the main spoken langauges of which Indian state ?",
            "answer": 2
        }, {
            "options": [
            "Sukumar Sen",
            "G.V.Mavalankar",
            "Harilal J. Kania",
            "S.Radhakrishnan"
            ],
            "question": "On 15 May 1952, who became the first speaker of the Lok Sabha ?",
            "answer": 1
        }, {
            "options": [
            "Tansen",
            "Baiju Bawra",
            "Nayak Charju",
            "Amir Khusro"
            ],
            "question": "Which royal poet of Delhi Sultanate is regarded as the 'Father of Qawwali' ?",
            "answer": 3
        }, {
            "options": [
            "Ashapurna Devi",
            "Mahasveta Devi",
            "Mahadevi Varma",
            "Amrita Pritam"
            ],
            "question": "In 1976, which Bengali lady novelist became the first woman to receive the Jnanpith Award for her novel 'Pratham Pritisruti' (First Promise) ?",
            "answer": 0
        }, {
            "options": [
            "Article 352",
            "Article 356",
            "Article 360",
            "Article 370"
            ],
            "question": "Which Article of the Indian Constitution gives special status to Jammu and Kashmir ?",
            "answer": 3
        }, {
            "options": [
            "Naushad",
            "S.D.Burman",
            "O.P.Nayyar",
            "C.Ramchandra"
            ],
            "question": "Immortalized in the voice of Lata Mangeshkar, Kavi Pradeep's famous patriotic song 'Aye mere watan ke logon' was set to music by which musician ?",
            "answer": 3
        }, {
            "options": [
            "Olympic Games",
            "Commonwealth Games",
            "FIFA World Cup",
            "Asian Games"
            ],
            "question": "Coined by French priest Henri Didon, 'Citius, Altius, Fortius' (Swifter, Higher, Stronger) slogan is the motto of which tournament ?",
            "answer": 0
        }, {
            "options": [
            "Mother Teresa",
            "Sister Nivedita",
            "Florence Nightingale",
            "The Mother (Mirra Alfassa)"
            ],
            "question": "Who was popularly known as the 'Lady with the Lamp' ?",
            "answer": 2
        }, {
            "options": [
            "France",
            "United Kingdom",
            "Argentina",
            "Spain"
            ],
            "question": "Falkland Islands, located in South Atlantic Ocean, are a self-governing Overseas Territory of which country ?",
            "answer": 1
        }, {
            "options": [
            "Mumbai",
            "Bengaluru",
            "Hyderabad",
            "Kolkata"
            ],
            "question": "On 1st July 1997, where was India's first Science City inaugurated ? ",
            "answer": 3
        }, {
            "options": [
            "Raj Ghat",
            "Vijay Ghat",
            "Abhay Ghat",
            "Narayan Ghat"
            ],
            "question": "What is the name of Morarji Desai's samadhi in Ahmedabad ? ",
            "answer": 2
        }, {
            "options": [
            "Lord Auckland",
            "Lord Amherst",
            "Lord William Bentinck",
            "Lord Dalhousie"
            ],
            "question": "In 1829, which Governor-General prohibited the practice of 'Sati' ? ",
            "answer": 2
        }, {
            "options": [
            "Fa Hian",
            "Megasthanese",
            "Al Beruni",
            "Huen Tsang"
            ],
            "question": "Who authored the book 'Indica' ? ",
            "answer": 1
        }, {
            "options": [
            "Tokyo Stock Exchange",
            "Hong Kong Stock Exchange",
            "Shanghai Stock Exchange",
            "Bombay Stock Exchange"
            ],
            "question": "Which is the oldest stock exchange in Asia ? ",
            "answer": 3
        }, {
            "options": [
            "Mangala Rai",
            "Sam Pitroda",
            "Anil Kakodkar",
            "G.Madhavan Nair"
            ],
            "question": "Who is the chairman of the Atomic Energy Commission of India ? ",
            "answer": 2
        }, {
            "options": [
            "Pulkesin I",
            "Pulkesin II",
            "Vinayaditya",
            "Vijayaditya"
            ],
            "question": "By defeating Harshavardhana on the banks of river Narmada, which Chalukya ruler stopped him from expanding into south ? ",
            "answer": 1
        }, {
            "options": [
            "Mahatma Gandhi",
            "Dadabhai Naoroji",
            "Tej Bahadur Sapru",
            "Gopal Krishna Gokhale"
            ],
            "question": "In 1892, who became the first Indian to be elected to the House of Commons (lower house of British Parliament) ? ",
            "answer": 1
        }, {
            "options": [
            "National Defence Academy",
            "Indian Military Academy",
            "Defence Services Staff College",
            "Dundigul Air Force Academy"
            ],
            "question": "Which military training institute located at Khadakwasla near Pune in Maharashtra has adopted 'Seva Parmo Dharma' (Service before Self) as its motto ? ",
            "answer": 0
        }, {
            "options": [
            "Manila (Philippines)",
            "Bangkok (Thailand)",
            "Kualalampur (Malaysia)",
            "Seoul (South Korea)"
            ],
            "question": "Which city houses the headquarters of Asian Development Bank (ADB) ? ",
            "answer": 0
        }, {
            "options": [
            "Kshipra",
            "Godavari",
            "Krishna",
            "Kaveri"
            ],
            "question": "On the banks of which river is the Kumbh Mela at Ujjain held ?",
            "answer": 0
        }, {
            "options": [
            "Glass",
            "Leather",
            "Diamond",
            "Fireworks"
            ],
            "question": "Shivkasi in Tamil Nadu is famous for which industry ?",
            "answer": 3
        }, {
            "options": [
            "Oxygen",
            "Hydrogen",
            "Carbon dioxide",
            "Carbon monoxide"
            ],
            "question": "To put out the fire, which gas is released by Fire Extinguishers ?",
            "answer": 2
        }, {
            "options": [
            "Goat",
            "Camel",
            "Elephant",
            "Bear"
            ],
            "question": "'Dromedary' and 'Bactrian' are the types of which animal ?",
            "answer": 1
        }, {
            "options": [
            "Daman and Diu",
            "Lakshadweep",
            "Dadra and Nagar Haveli",
            "Andaman and Nicobar Islands"
            ],
            "question": "In which union territory of India, would you meet the people of the Onge tribe ?",
            "answer": 3
        }, {
            "options": [
            "Singapore",
            "Indonesia",
            "Philippines",
            "Malaysia"
            ],
            "question": "Ramon Magsaysay Award, often considered as Asia's Nobel Prize, is given in memory of which Asian country's former president ?",
            "answer": 2
        }, {
            "options": [
            "Silchar (Assam)",
            "Kohima (Nagaland)",
            "Imphal (Manipur)",
            "Shillong (Meghalaya)"
            ],
            "question": "The East-West Corridor, being constructed under National Highways Development Project, and which starts at Porbandar (Gujarat) in west, will terminate at which place in the east ?",
            "answer": 0
        }, {
            "options": [
            "Earth and Mars",
            "Mars and Jupiter",
            "Jupiter and Saturn",
            "Saturn and Uranus"
            ],
            "question": "Asteroids, sometimes called minor planets or planetoids, are generally found between which planets ?",
            "answer": 1
        }, {
            "options": [
            "Say's Law",
            "Gresham's Law",
            "Murphy's Law",
            "Parkinson's Law"
            ],
            "question": "By what name is the observation in economics that 'bad money drives out good money' popularly known ?",
            "answer": 1
        }, {
            "options": [
            "Meghnad Saha",
            "Jagdish Chandra Bose",
            "Satyendra Nath Bose",
            "Homi Bhabha"
            ],
            "question": "The subatomic particle 'Boson' is named after which Indian scientist ?",
            "answer": 2
        }, {
            "options": [
            "Indira Gandhi",
            "Rajeev Gandhi",
            "P.V.Narsimha Rao",
            "Atal Behari Vajpayee"
            ],
            "question": "In May 1998, while addressing at nuclear tests site near Pokhran, who added 'Jai Vigyan' to the Lal Bahadur Shastri's slogan 'Jai Jawan, Jai Kisan' ?",
            "answer": 3
        }, {
            "options": [
            "Tapti",
            "Narmada",
            "Subarnarekha",
            "Hooghly"
            ],
            "question": "On the banks of which river is the Jamshedpur, the steel city of India, situated ?",
            "answer": 2
        }, {
            "options": [
            "Jabalpur (M.P.)",
            "Kharagpur (W.Bengal)",
            "Mughalsarai (U.P.)",
            "Secunderabad (A.P.)"
            ],
            "question": "Which Indian city you would be in if you were standing on world's longest railway platform ?",
            "answer": 1
        }, {
            "options": [
            "Shyamchi Aai (Marathi)",
            "Pather Panchali (Bengali)",
            "Kabooliwala (Bengali)",
            "Mirza Galib (Hindi)"
            ],
            "question": "In 1953, which film won the first National Award for the Best Feature Film ?",
            "answer": 0
        }, {
            "options": [
            "Goa",
            "Kochi (Cochin)",
            "Mumbai (Bombay)",
            "Kozhikode (Calicut)"
            ],
            "question": "In his first voyage to India, at which place did Vasco da Gama land on 20 May 1498 ?",
            "answer": 3
        }, {
            "options": [
            "Dharmapala",
            "Devapala",
            "Mahipala",
            "Govindpala"
            ],
            "question": "Vikramshila University, an ancient university of India whose ruins are situated in present day Bihar, was founded by which Pala ruler ?",
            "answer": 0
        }, {
            "options": [
            "Yasser Arafat",
            "Nelson Mandela",
            "Dalai Lama XIV",
            "Aung San Suu Kyi"
            ],
            "question": "'Freedom in Exile' book is the autobiography of which Nobel Peace Prize winner ?",
            "answer": 2
        }, {
            "options": [
            "P.T.Usha",
            "K.M.Beenamol",
            "Jyotirmay Sikdar",
            "Anju Bobby George"
            ],
            "question": "Which Indian woman athlete is popularly known as 'Idukki Express' ?",
            "answer": 1
        }, {
            "options": [
            "Sam Pitroda",
            "G.Madhavan Nair",
            "N.R.Narayan Murthy",
            "A.P.J.Abdul Kalam"
            ],
            "question": "Hoover Medal, a prize given for outstanding extra-career services by engineers to humanity, has been awarded to which Indian engineer for year 2008 ?",
            "answer": 3
        }, {
            "options": [
            "Sanath Jayasuriya (Sri Lanka)",
            "Adam Gilchrist (Australia)",
            "Herschelle Gibbs (South Africa)",
            "Shahid Afridi (Pakistan)"
            ],
            "question": "In international cricket, Yuvraj Singh of India is the second batsman to hit 6 sixers in an over. Who was the first ?",
            "answer": 2
        }, {
            "options": [
            "Common",
            "Commercial",
            "Computer",
            "Communication"
            ],
            "question": "In the most popular internet domain name '.com' (dot-com), the 'com' is the short form for which word ? ",
            "answer": 1
        }, {
            "options": [
            "Vitamin A",
            "Vitamin B",
            "Vitamin C",
            "Vitamin D"
            ],
            "question": "Deficiency of which vitamin leads to 'Rickets' (softening of bones) ? ",
            "answer": 3
        }, {
            "options": [
            "Bal Gangadhar Tilak",
            "Chittaranjan Das",
            "Dadabhai Naoroji",
            "C.Rajagopalachari"
            ],
            "question": "Which freedom fighter was popularly known as the 'Grand Old Man of India' ? ",
            "answer": 2
        }, {
            "options": [
            "Gujarat",
            "Maharashtra",
            "Tamil Nadu",
            "Andhra Pradesh"
            ],
            "question": "Which Indian state has the longest coastline ? ",
            "answer": 0
        }, {
            "options": [
            "Bihar",
            "Jharkhand",
            "West Bengal",
            "Orissa"
            ],
            "question": "Naxalbari village, the birth place of Naxalite Movement, is located in which state ? ",
            "answer": 2
        }, {
            "options": [
            "Nepal",
            "Sri Lanka",
            "Bhutan",
            "Myanmar"
            ],
            "question": "'Roopavahini' is the National Television Network of which Asian country ? ",
            "answer": 1
        }, {
            "options": [
            "C.V.Raman",
            "Homi Bhabha",
            "P.C.Mahalanobis",
            "Vikram Sarabhai"
            ],
            "question": "On 17 Dec 1931, who founded the Indian Statistical Institute (ISI) in Kolkata ? ",
            "answer": 2
        }, {
            "options": [
            "Hyderabad (India)",
            "Dhaka (Bangladesh)",
            "Colombo (Sri Lanka)",
            "Lahore (Pakistan)"
            ],
            "question": "Named after Libyan leader Muammar al-Gaddafi, famous Test cricket ground Gaddafi Stadium is located in which city ? ",
            "answer": 3
        }, {
            "options": [
            "Vajra",
            "Khatvanga",
            "Sudarshan Chakra",
            "Kaumodaki"
            ],
            "question": "Which mythological weapon is depicted on the Param Vir Chakra medal ? ",
            "answer": 0
        }, {
            "options": [
            "Coal Gas",
            "Water Gas",
            "Compressed Natural Gas (CNG)",
            "Liquefied Petroleum Gas (LPG)"
            ],
            "question": "Hydrogen and Carbon monoxide are the major constituents of which fuel gas ? ",
            "answer": 1
        }, {
            "options": [
            "Rajiv Gandhi",
            "V.P.Singh",
            "H.D.Deve Gowda",
            "Chandrashekhar"
            ],
            "question": "Which former Prime Minister of India was also called 'Yuva Turk' ? ",
            "answer": 3
        }, {
            "options": [
            "Gypsum",
            "Calcite",
            "Fluorite",
            "Apatite"
            ],
            "question": "Which mineral is used to make the Plaster of Paris ? ",
            "answer": 0
        }, {
            "options": [
            "English",
            "Mandarin",
            "Spanish",
            "Hindi"
            ],
            "question": "Which is the most spoken language in the world ? ",
            "answer": 1
        }, {
            "options": [
            "Mars",
            "Jupiter",
            "Saturn",
            "Venus"
            ],
            "question": "Which planet in the Solar System is named after the Roman god of agriculture and harvest ? ",
            "answer": 2
        }, {
            "options": [
            "Australia",
            "South Africa",
            "United Kingdom",
            "United States of America"
            ],
            "question": "From the Constitution of which country was the concept of the Fundamental Rights in the Indian Constitution borrowed ? ",
            "answer": 3
        }, {
            "options": [
            "Arctic Ocean",
            "Antarctic Ocean",
            "Atlantic Ocean",
            "Indian Ocean"
            ],
            "question": "To which ocean does Panama Canal connect the Pacific Ocean ? ",
            "answer": 2
        }, {
            "options": [
            "Ved Vyas",
            "Valmiki",
            "Tulsidas",
            "Ramanujacharya"
            ],
            "question": "By what name is Krishna Dvaipayana, author of the epic Mahabharat, better known ? ",
            "answer": 0
        }, {
            "options": [
            "Nagpur",
            "Lucknow",
            "Shimla",
            "Cuttack"
            ],
            "question": "In which city is the Central Potato Research Institute (CPRI) located ? ",
            "answer": 2
        }, {
            "options": [
            "Cow",
            "Horse",
            "Camel",
            "Goat"
            ],
            "question": "'Bhutia', 'Kathiawadi', 'Marwari', 'Manipuri', 'Spiti' and 'Zanskari' are the Indian breeds of which animal ? ",
            "answer": 1
        }, {
            "options": [
            "George Orwell",
            "Karel Capek",
            "Daniel Defoe",
            "Rudyard Kipling"
            ],
            "question": "Who introduced the word 'Robot', for artificial workers, in his science fiction play R.U.R. in 1921 ? ",
            "answer": 1
        }, {
            "options": [
            "Jaipur",
            "Jodhpur",
            "Bengaluru",
            "Chandigarh"
            ],
            "question": "Designed by Bengali architect Vidhyadhar Bhattacharya, which city is known as 'Pink City' ? ",
            "answer": 0
        }, {
            "options": [
            "Copper",
            "Silver",
            "Tungsten",
            "Aluminium"
            ],
            "question": "Which metal is used to make electric bulb filaments ? ",
            "answer": 2
        }, {
            "options": [
            "Lord Mayo",
            "Lord Dalhousie",
            "Lord Canning",
            "Lord Curzon"
            ],
            "question": "Who was the first Viceroy of India ? ",
            "answer": 2
        }, {
            "options": [
            "Nauru",
            "Monaco",
            "Tuvalu",
            "Vatican City"
            ],
            "question": "In terms of both area and population, which is the smallest country in the world ? ",
            "answer": 3
        }, {
            "options": [
            "Labour",
            "Health",
            "Education",
            "Railways"
            ],
            "question": "Which portfolio did Rajkumari Amrit Kaur, the first woman cabinet minister in India, hold in the independent India's first cabinet ? ",
            "answer": 1
        }, {
            "options": [
            "Tamil Nadu",
            "Karnataka",
            "Maharashtra",
            "Andhra Pradesh"
            ],
            "question": "Palghat Gap, about 20 miles wide mountain pass between the Nilgiri Hills and the Anaimalai Hills, connects Kerala to which state ? ",
            "answer": 0
        }, {
            "options": [
            "Nigeria",
            "Pakistan",
            "Bangladesh",
            "Indonesia"
            ],
            "question": "Named after the mount of Hindu god Vishnu, 'Garuda' is the national airline of which most Muslim populous country ? ",
            "answer": 3
        }, {
            "options": [
            "Vijayawada",
            "Rajahmundry",
            "Pochampally",
            "Warangal"
            ],
            "question": "At which town in Andhra Pradesh, famous for silk sarees, did Vinoba Bhave start the Bhoodan Movement in 1951 ? ",
            "answer": 2
        }, {
            "options": [
            "Indira Gandhi",
            "Benazir Bhutto",
            "Aung San Suu Kyi",
            "Maghawati Sukarnoputri"
            ],
            "question": "'Daughter of the East' book is the autobiography of which Asian woman leader ? ",
            "answer": 1
        }, {
            "options": [
            "Namibia",
            "Ethiopia",
            "Botswana",
            "Burkina Faso"
            ],
            "question": "Which country was formerly known as 'Upper Volta' ? ",
            "answer": 3
        }, {
            "options": [
            "15 January",
            "28 February",
            "29 August",
            "15 September"
            ],
            "question": "When do we celebrate the Engineers Day of India, the birthday of Bharat Ratna recipient M.Visvesarayya ? ",
            "answer": 3
        }, {
            "options": [
            "Wool",
            "Silk",
            "Jute",
            "Cotton"
            ],
            "question": "'Muga', 'Eri', 'Tussar' and 'Mulberry' are the varieties of which natural fibre ? ",
            "answer": 1
        }, {
            "options": [
            "Dwarka",
            "Varanasi",
            "Rameshwaram",
            "Tirupati"
            ],
            "question": "In which pilgrimage city of India would you come across the world's longest corridor ? ",
            "answer": 2
        }, {
            "options": [
            "Mahatma Gandhi",
            "Gopal Krishan Gokhle",
            "Mohammed Ali Jinnah",
            "Khan Abdul Ghaffar Khan"
            ],
            "question": "In 1929, who founded non-violent movement 'Khudai Khidmatgar', also known as 'Red Shirts' ? ",
            "answer": 3
        }, {
            "options": [
            "Jhansi",
            "Gwalior",
            "Patiala",
            "Nagpur"
            ],
            "question": "Lakshmibai National Institute of Physical Education is located in which city ? ",
            "answer": 1
        }, {
            "options": [
            "Virus",
            "Fungi",
            "Bacteria",
            "Protozoa"
            ],
            "question": "Athlete's Foot, an infectious disease, is caused by which agent ? ",
            "answer": 1
        }, {
            "options": [
            "S.Radhakrishnan",
            "Jawaharlal Nehru",
            "C.Rajagopalachari",
            "Mahatma Gandhi"
            ],
            "question": "Who authored the book 'Hindu View of Life ? ",
            "answer": 0
        }, {
            "options": [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide",
            "Hydrogen"
            ],
            "question": "Solid form of which gas is commonly known as 'Dry Ice' ? ",
            "answer": 2
        }, {
            "options": [
            "Golda Meir",
            "Indira Gandhi",
            "Sirimavo Bhandarnaike",
            "Maria Isbel Paron"
            ],
            "question": "Who was the first woman president in the world ? ",
            "answer": 3
        }, {
            "options": [
            "Adam Osborne",
            "Charles Babbage",
            "Steve Jobs",
            "Tim Berners-Lee"
            ],
            "question": "Who created the first Portable Computer ? ",
            "answer": 0
        }, {
            "options": [
            "Baseball",
            "Volleyball",
            "Korfball",
            "Hockey"
            ],
            "question": "In which sport, each team consists of four male and four female players ? ",
            "answer": 2
        }, {
            "options": [
            "3 years",
            "4 years",
            "5 years",
            "6 years"
            ],
            "question": "What is the term of a member of Rajya Sabha ? ",
            "answer": 3
        }, {
            "options": [
            "Sikkim",
            "Jammu  Kashmir",
            "Himachal Pradesh",
            "Uttarakhand"
            ],
            "question": "In which state is the Kanchenjunga, the second highest mountain peak in India, located ? ",
            "answer": 0
        }, {
            "options": [
            "Beekeeping",
            "Fish Farming",
            "Silk Farming",
            "Dairy Farming"
            ],
            "question": "What does the Pisciculture refers to ? ",
            "answer": 1
        }, {
            "options": [
            "Mohammed Ali Jinnah",
            "Syed Ahmed Khan",
            "Mohammed Iqbal",
            "Nawab Salimullah Khan"
            ],
            "question": "In 1906, at the founding session of all India Muslim League in Dhaka, who became the first president of the party ? ",
            "answer": 3
        }, {
            "options": [
            "Kolkata - Hazira (NH6)",
            "Chennai - Baharagora (NH5)",
            "Varanasi - Kanyakumari (NH7)",
            "Pathankot - Samakhiali (NH15)"
            ],
            "question": "Which is the longest National Highways in India ? ",
            "answer": 2
        }, {
            "options": [
            "Chaitanya Mahaprabhu",
            "Ramakrishna Paramhans",
            "Swami Dayanand Saraswati",
            "Swami Vivekanand"
            ],
            "question": "How do we better know nineteenth century spiritual guru Gadadhar Chatterjee ? ",
            "answer": 1
        }, {
            "options": [
            "Ear",
            "Hand",
            "Foot",
            "Lungs"
            ],
            "question": "Stapes, the smallest and the lightest bone in human body, is the part of which organ ? ",
            "answer": 0
        }, {
            "options": [
            "Zinc",
            "Lignite",
            "Copper",
            "Gold"
            ],
            "question": "Which mineral is mined at Jayamkondam in Tamil Nadu ? ",
            "answer": 1
        }, {
            "options": [
            "Jack Welch",
            "Bill Gates",
            "Deepak Chopra",
            "Stephan Hawking"
            ],
            "question": "Who authored the book 'A Brief History of Time' ? ",
            "answer": 3
        }, {
            "options": [
            "Mustard",
            "Sugarcane",
            "Groundnut",
            "Maize"
            ],
            "question": "Which among the following is not a Kharif crop ?",
            "answer": 0
        }, {
            "options": [
            "Taj Mahal, Agra",
            "Hawa Mahal, Jaipur",
            "Gol Gumbad, Bijapur",
            "Charminar, Hyderabad"
            ],
            "question": "Which monument was built by Mohammed Quli Qutub Shah in 1591 to commemorate the end of the plague in his capital ?",
            "answer": 3
        }, {
            "options": [
            "UNIDO",
            "UNESCO",
            "UNICEF",
            "UNHRC"
            ],
            "question": "For the popularization of science, which agency of United Nations (UN) awards the Kalinga Prize ?",
            "answer": 1
        }, {
            "options": [
            "Paradip (Orissa)",
            "Chennai (Tamil Nadu)",
            "Tuticorin (Tamil Nadu)",
            "Visakhapatnam (Andhra Pradesh)"
            ],
            "question": "'Lawsons Bay Beach' and 'Ramakrishna Beach' are located in which port city on the Bay of Bengal ?",
            "answer": 3
        }, {
            "options": [
            "Charak",
            "Madhav",
            "Sushruta",
            "Patanjali"
            ],
            "question": "Which ancient Indian physician is known as the 'Father of Modern Plastic Surgery' ?",
            "answer": 2
        }, {
            "options": [
            "Danny Boyle",
            "Megan Mylan",
            "Andrew Stanton",
            "Gus Van Sant"
            ],
            "question": "Who directed Oscar award winning short documentary film 'Smile Pinki' (2008) ?",
            "answer": 1
        }, {
            "options": [
            "M.N.Roy",
            "V.V.Giri",
            "Lala Lajpat Rai",
            "Shripad Amrut Dange"
            ],
            "question": "Who presided over the first session of the All India Trade Union Cogress in 1920 ?",
            "answer": 2
        }, {
            "options": [
            "Mars",
            "Earth",
            "Venus",
            "Mercury"
            ],
            "question": "On which planet, due to its clockwise (east to west) rotation on the axis, the Sun rises in the west and sets in the east ?",
            "answer": 2
        }, {
            "options": [
            "Meera Ben",
            "Sister Nivedita",
            "The Mother",
            "Sarla Ben"
            ],
            "question": "By what name is British lady Madeleine Slade, a disciple of Mahatma Gandhi, better known ?",
            "answer": 0
        }, {
            "options": [
            "Sabeer Bhatia",
            "Vinod Dham",
            "Vinod Khosla",
            "Vijay Bhatkar"
            ],
            "question": "For his major role in the development of computer chip 'Pentium', which indian IT expert is called the 'Father of Pentium' ?",
            "answer": 1
        }, {
            "options": [
            "Meerut",
            "Chennai",
            "Kolkata",
            "Patna"
            ],
            "question": "Gol Ghar, a beehive shaped structure built in 1786 to store grains for the British Army, is located in which city ?",
            "answer": 3
        }, {
            "options": [
            "Melanin",
            "Bilirubin",
            "Carotene",
            "Hemoglobin"
            ],
            "question": "In humans, which dark brown pigment is responsible for the skin colour ?",
            "answer": 0
        }, {
            "options": [
            "Rabindranath Tagore",
            "Bankim Chandra Chatterjee",
            "Sharat Chandra Chatterjee",
            "Bibhuti Bhushan Bandopadhyay"
            ],
            "question": "Who wrote the famous novel 'Devdas' ?",
            "answer": 2
        }, {
            "options": [
            "Gopinath Bordoloi",
            "Bal Gangadhar Tilak",
            "Chittaranjan Das",
            "Jayaprakash Narain"
            ],
            "question": "Which freedom fighter was popularly known as 'Lokpriya' ?",
            "answer": 0
        }, {
            "options": [
            "Battle of Plassey (1757)",
            "Battle of Buxar (1764)",
            "Battle of Talikota (1565)",
            "Battle of Seringapatam (1799)"
            ],
            "question": "Which battle lead to the disintegration of Vijayanagar empire of south India ?",
            "answer": 2
        }, {
            "options": [
            "Lucknow",
            "Nagpur",
            "Indore",
            "Kanpur"
            ],
            "question": "In which city is the Indian Institute of Pulses Research located ?",
            "answer": 3
        }, {
            "options": [
            "Indra",
            "Shiva",
            "Vishnu",
            "Brahma"
            ],
            "question": "Pinaka, the multi barrel rocket launcher produced in India, is named after which Hindu God's bow ?",
            "answer": 1
        }, {
            "options": [
            "Mohs scale",
            "Beaufort scale",
            "Richter scale",
            "pH scale"
            ],
            "question": "Which scale is used to measure the Acid or Alkali (Base) content of a substance ?",
            "answer": 3
        }, {
            "options": [
            "Argyria",
            "Minamata",
            "Itai-itai",
            "Devon colic"
            ],
            "question": "Which disease, named after a Japanese city where it was first observed, is caused by severe Mercury poisoning ?",
            "answer": 1
        }, {
            "options": [
            "Srinivasa Ramanujan",
            "Ardaseer Cursetjee Wadia",
            "Jagadish Chandra Bose",
            "Meghnad Saha"
            ],
            "question": "Who was the first Indian to be elected a Fellow of Royal Society (FRS) ?",
            "answer": 1
        }, {
            "options": [
            "Irani Trophy",
            "Duleep Trophy",
            "Deodhar Trophy",
            "Nissar Trophy"
            ],
            "question": "For which domestic Cricket trophy, the Ranji Trophy champions play against the Rest of India team ? ",
            "answer": 0
        }, {
            "options": [
            "Shalimar Gardens",
            "Nishat Gardens",
            "Brindavan Gardens",
            "Pinjore Gardens"
            ],
            "question": "Which garden near Chandigarh was built by Aurangzeb's foster brother Fidai Khan ? ",
            "answer": 3
        }, {
            "options": [
            "Lal Bahadur Shastri",
            "Shyama Prasad Mukherjee",
            "Maulana Abul Kalam Azad",
            "Vallabhbhai Patel"
            ],
            "question": "Who was the first education minister of independent India ? ",
            "answer": 2
        }, {
            "options": [
            "Vienna (Austria)",
            "Geneva (Switzerland)",
            "New York (USA)",
            "Washington (USA)"
            ],
            "question": "Which city houses the headquarters of United Nations (UN) ? ",
            "answer": 2
        }, {
            "options": [
            "Ohm",
            "Volt",
            "Watt",
            "Ampere"
            ],
            "question": "Which among the following is the measuring unit of electric current ? ",
            "answer": 3
        }, {
            "options": [
            "Surya",
            "Shiva",
            "Vishnu",
            "Brahma"
            ],
            "question": "Angkor Wat temple in Cambodia, the largest Hindu temple in the world, is dedicated to which God ? ",
            "answer": 2
        }, {
            "options": [
            "Thumba (Kerala)",
            "Sriharikota (Andhra Pradesh)",
            "Bangalore (Karnataka)",
            "Thiruvananthapuram (Kerala)"
            ],
            "question": "Where is the Satish Dhawan Space Centre, the launching site of the Chandrayaan-I, located ? ",
            "answer": 1
        }, {
            "options": [
            "Malawi",
            "Ghana",
            "Botswana",
            "Tanzania"
            ],
            "question": "Which African country was formerly known as 'Nyasaland' ? ",
            "answer": 0
        }, {
            "options": [
            "Jawaharlal Nehru",
            "S.Radhakrishnan",
            "Khan Abdul Ghaffar Khan",
            "Nelson Mandela"
            ],
            "question": "'Long Walk To Freedom' is the autobiography of which Bharat Ratna recipient ? ",
            "answer": 3
        }, {
            "options": [
            "Maldives",
            "Madagascar",
            "Sri Lanka",
            "Mauritius"
            ],
            "question": "Which island nation, in the Indian Ocean, is the world's largest producer and exporter of Vanilla ? ",
            "answer": 1
        }, {
            "options": [
            "Rita Faria",
            "Zeenat Aman",
            "Tara Anne Fonseca",
            "Diya Mirza"
            ],
            "question": "Who was the first Indian woman to win Miss Asia Pacific title in 1970 ? ",
            "answer": 1
        }, {
            "options": [
            "Rabindranath Tagore",
            "Bankimchandra Chatterjee",
            "Mohammed Iqbal",
            "Kavi Pradeep"
            ],
            "question": "Who wrote India's natinal song the 'Vande Mataram', which first appeared in the book 'Anandmath' ? ",
            "answer": 1
        }, {
            "options": [
            "Two",
            "Three",
            "Four",
            "Not fixed"
            ],
            "question": "How many times Equinox, when Sun is vertically above the Earth's equator and the day  night are equally long, occurs in a year ? ",
            "answer": 0
        }, {
            "options": [
            "Bodh Gaya (Bihar)",
            "Sarnath (U.P.)",
            "Kushinagar (U.P.)",
            "Sanchi (M.P.)"
            ],
            "question": "After attaining enlightenment, where did Gautama Buddha deliver his first sermon 'Dharamachakra Pravartan' (set in motion Wheel of Law) ? ",
            "answer": 1
        }, {
            "options": [
            "Thailand",
            "Indonesia",
            "Malaysia",
            "Singapore"
            ],
            "question": "Which Asian country is known as the 'Land of the White Elephants' ? ",
            "answer": 0
        }, {
            "options": [
            "K.C.Verma",
            "N.P.S.Aulakh",
            "Radha Vinod Raju",
            "Ashwani Kumar"
            ],
            "question": "Who is the first chief of the National Investigation Agency (NIA), set up recently to investigate terror-related cases across the country ? ",
            "answer": 2
        }, {
            "options": [
            "Jonas Salk",
            "Frederick Banting",
            "Edward Jenner",
            "Louis Pasteur"
            ],
            "question": "Who invented Smallpox Vaccine ? ",
            "answer": 2
        }, {
            "options": [
            "Vinoba Bhave",
            "Mahatma Gandhi",
            "C.Rajagopalachari",
            "Bal Gangadhar Tilak"
            ],
            "question": "Which freedom fighter authored 'Gita Rahasya', a commentary on Bhagvad Gita, during his imprisonment at Mandalay in Myanmar ? ",
            "answer": 3
        }, {
            "options": [
            "Neem",
            "Mango",
            "Olive",
            "Eucalyptus"
            ],
            "question": "Considered as the symbol of peace, two branches of which tree are depicted on the United Nations (UN) flag ? ",
            "answer": 2
        }, {
            "options": [
            "Nasik",
            "Nagpur",
            "Mumbai",
            "Port Blair"
            ],
            "question": "Which city is served by the Veer Savarkar Airport ? ",
            "answer": 3
        }, {
            "options": [
            "Kerala",
            "Karnataka",
            "Andhra Pradesh",
            "Tamil Nadu"
            ],
            "question": "Which state is known as the 'Spice Garden of India' ? ",
            "answer": 0
        }, {
            "options": [
            "Saamna",
            "Sakal",
            "Lokmat",
            "Loksatta"
            ],
            "question": "Which Marathi newspaper is the mouthpiece of Shiv Sena ? ",
            "answer": 0
        }, {
            "options": [
            "Argon",
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide"
            ],
            "question": "Constituting about 78% by volume, which is the most abundant gas in the Earth's atmosphere ? ",
            "answer": 2
        }, {
            "options": [
            "Karnataka",
            "Maharashtra",
            "Andhra Pradesh",
            "Madhya Pradesh"
            ],
            "question": "Koyna Hydroelectric Power Project constructed over Koyna river, a tributary of Krishna river, is located in which state ? ",
            "answer": 1
        }, {
            "options": [
            "1",
            "2",
            "3",
            "4"
            ],
            "question": "For Lok Sabha, how many members from the Anglo-Indian community are nominated by the President of India ? ",
            "answer": 1
        }, {
            "options": [
            "Babur",
            "Akbar",
            "Sher Shah Suri",
            "Humayun"
            ],
            "question": "The Grand Trunk Road (GT Road), running from Peshawar in Pakistan to Sonargaon in Bangladesh, was built by which ruler ? ",
            "answer": 2
        }, {
            "options": [
            "Carl Lewis",
            "Paavo Nurmi",
            "Mark Spitz",
            "Michael Phelps"
            ],
            "question": "Which American swimmer created history by winning 8 gold medals in Beijing Olympic 2008, the most gold medals by an individual at a single Olympic ? ",
            "answer": 3
        }, {
            "options": [
            "Zakir Hussain",
            "Hakim Ajmal Khan",
            "Syed Ahmed Khan",
            "Maulana Abul Kalam Azad"
            ],
            "question": "Which Muslim social reformer founded the Aligarh Muslim University, originally known as Mohammeden Anglo-Oriental College, in 1875 ? ",
            "answer": 2
        }, {
            "options": [
            "V.S.Naipaul",
            "Amitav Ghosh",
            "Salman Rushdie",
            "Aravind Adiga"
            ],
            "question": "Which chennai born writer won the Booker Prize 2008 for his debut novel 'The White Tiger' ? ",
            "answer": 3
        }, {
            "options": [
            "National Defence Academy",
            "Indian Military Academy",
            "Defence Services Staff College",
            "Counterinsurgency  Jungle Warfare School"
            ],
            "question": "'Fight the guerrilla as a guerrilla' is the motto of which miltary academy ? ",
            "answer": 3
        }, {
            "options": [
            "Epsom Salt",
            "Common Salt",
            "Baking Soda",
            "Washing Soda"
            ],
            "question": "What is the popular name of Sodium Chloride ? ",
            "answer": 1
        }, {
            "options": [
            "Kena",
            "Katha",
            "Mundaka",
            "Aitareya"
            ],
            "question": "'Satyameva Jayate', the national motto of India, has been teken from which Upanishad ? ",
            "answer": 2
        }, {
            "options": [
            "Ravi",
            "Tawi",
            "Tapti",
            "Gomti"
            ],
            "question": "On the banks of which river is the city of Jammu, the winter capital of Jammu  Kashmir, situated ? ",
            "answer": 1
        }, {
            "options": [
            "Baba Amte",
            "Vinoba Bhave",
            "Swami Ramdev",
            "Swami Agnivesh"
            ],
            "question": "How do we better know social activist Murlidhar Devidas, the founder of leprosy rehabilitation center 'Anandvan' in Maharashtra ? ",
            "answer": 0
        }, {
            "options": [
            "Thar Express",
            "Samjhauta Express",
            "Maitreyi Express",
            "Himsagar Express"
            ],
            "question": "Which passenger train service connects Kolkata (India) with Dhaka (Bangladesh) ? ",
            "answer": 2
        }, {
            "options": [
            "Bindusara",
            "Ashok the Great",
            "Chandragupta Maurya",
            "Dasaratha Maurya"
            ],
            "question": "To the Greeks, which Maurya ruler was known as 'Sandrokottos' ? ",
            "answer": 2
        }, {
            "options": [
            "Google",
            "Alta Vista",
            "Yahoo",
            "Lycos"
            ],
            "question": "In 1998, which internet search engine company was co-founded by Larry Page and Sergey Brin ? ",
            "answer": 0
        }, {
            "options": [
            "Sunil Gavaskar",
            "Ajit Wadekar",
            "Sandeep Patil",
            "Kapil Dev"
            ],
            "question": "'By God's Decree', 'Cricket my style' and 'Straight from the Heart' are the autobiographies of which Indian cricketer ? ",
            "answer": 3
        }, {
            "options": [
            "Sea of Waves",
            "Sea of Clouds",
            "Sea of Serenity",
            "Sea of Tranquility"
            ],
            "question": "On 21st July 1969, at which site did Neil Armstrong set his foot on the Moon ? ",
            "answer": 3
        }, {
            "options": [
            "Nitric Acid",
            "Sulphuric Acid",
            "Hydrochloric Acid",
            "Hydrofluoric Acid"
            ],
            "question": "Due to its ability to dissolve glass, which acid is not kept in glass container ? ",
            "answer": 3
        }, {
            "options": [
            "Hydrogen",
            "Nitrogen",
            "Chlorine",
            "Oxygen"
            ],
            "question": "Which gas is used to disinfect water in swimming pools ?",
            "answer": 2
        }, {
            "options": [
            "Lion",
            "Tiger",
            "Leopard",
            "Jaguar"
            ],
            "question": "'Royal Bengal', 'Sumatran', 'Malayan' and 'Siberian' are the species of which member of cat family ?",
            "answer": 1
        }, {
            "options": [
            "Punjab",
            "Gujarat",
            "Andhra Pradesh",
            "Tamil Nadu"
            ],
            "question": "Which was the first state in the India to be formed on a purely linguistic basis, in 1953 ?",
            "answer": 2
        }, {
            "options": [
            "Mahadev Govind Ranade",
            "Dhondo Keshav Karve",
            "Mahatma Jyotirao Phule",
            "Gopal Hari Deshmukh"
            ],
            "question": "Which 19th century social reformer from Maharashtra was popularly known as 'Lokhitwadi' ?",
            "answer": 3
        }, {
            "options": [
            "Lectin",
            "Keratin",
            "Collagen",
            "Hemoglobin"
            ],
            "question": "In humans, which protein transports oxygen from the lungs to the rest of body ?",
            "answer": 3
        }, {
            "options": [
            "Orissa High Court",
            "Andhra Pradesh High Court",
            "Calcutta High Court",
            "Madras High Court"
            ],
            "question": "The union territory of Andaman  Nicobar Islands is under the jurisdiction of which High Court ?",
            "answer": 2
        }, {
            "options": [
            "Mars",
            "Jupiter",
            "Saturn",
            "Uranus"
            ],
            "question": "Ganymede, the largest natural satellite in the Solar System, is a natural satellite (moon) of which planet ?",
            "answer": 1
        }, {
            "options": [
            "Satara",
            "Sambalpur",
            "Jhansi",
            "Awadh"
            ],
            "question": "Which princely state was the first to be annexed to the British East India Company under the Doctrine of Lapse policy, devised by Lord Dalhousie ?",
            "answer": 0
        }, {
            "options": [
            "Suez Canal",
            "Panama Canal",
            "Palk Strait",
            "Strait of Gibraltar"
            ],
            "question": "Which water body seprates the Africa from the Europe ?",
            "answer": 3
        }, {
            "options": [
            "Abraham Lincoln",
            "George Washington",
            "John F. Kennedy",
            "Theodore Roosevelt"
            ],
            "question": "Which American President in his famous Gettysberg speech defined democracy as the 'government of the people, by the people, for the people' ?",
            "answer": 0
        }, {
            "options": [
            "Ardeshir Irani",
            "Dadasaheb Phalke",
            "V.Shantaram",
            "Sohrab Modi"
            ],
            "question": "Who directed 'Raja Harishchandra' (1913), the first totally indigenous Indian feature film ? ",
            "answer": 1
        }, {
            "options": [
            "President",
            "Prime Minister",
            "Finance Minister",
            "RBI Governor"
            ],
            "question": "Who is the ex-officio chairman of the Planning Commission of India ? ",
            "answer": 1
        }, {
            "options": [
            "Rabindra Setu",
            "Vidyasagar Setu",
            "Mahatma Gandhi Setu",
            "Anna Indira Gandhi Bridge"
            ],
            "question": "What is the name of India's longest river bridge, built over the river Ganga at Patna ? ",
            "answer": 2
        }, {
            "options": [
            "Raja Ram Mohan Roy",
            "Debendranath Tagore",
            "Mahadev Govind Ranade",
            "Keshub Chandra Sen"
            ],
            "question": "Who founded the Brahmo Samaj, initially known as Brahmo Sabha, in 1828 ? ",
            "answer": 0
        }, {
            "options": [
            "Punjab",
            "Maharashtra",
            "Karnataka",
            "West Bengal"
            ],
            "question": "'Tamasha' is the popular folk theatre of which state ? ",
            "answer": 1
        }, {
            "options": [
            "Karnal (Haryana)",
            "Shimla (Himachal Pradesh)",
            "Rajamundry (Andhra Pradesh)",
            "Cuttack (Orissa)"
            ],
            "question": "In which city is the Central Rice Research Institute located ? ",
            "answer": 3
        }, {
            "options": [
            "Anandpur (Punjab)",
            "Amritsar (Punjab)",
            "Patna (Bihar)",
            "Nanded (Maharashtra)"
            ],
            "question": "At which place Guru Gobind Singh, the tenth and the last Guru of Sikhs, created 'Khalsa' in 1699 ? ",
            "answer": 0
        }, {
            "options": [
            "Punita Arora",
            "Harita Kaur Deol",
            "Kanchan Chaudhary Bhattacharya",
            "Padmavathy Bandopadhyay"
            ],
            "question": "Who is the first woman Air Marshal of India Air Force (IAF) ? ",
            "answer": 3
        }, {
            "options": [
            "Curzon Line",
            "Durand Line",
            "McMahon Line",
            "RadCliffe Line"
            ],
            "question": "What is the boundary line demarcating India and China known as ? ",
            "answer": 2
        }, {
            "options": [
            "Wilson Jones",
            "Michael Ferreira",
            "Geet Sethi",
            "Manoj Kothari"
            ],
            "question": "In 1958, which billiards player became the first Indian to win an individual world title in any sport ? ",
            "answer": 0
        }, {
            "options": [
            "Prime Minister",
            "Lok Sabha Speaker",
            "Rajya Sabha Speaker",
            "Chief Justice of India"
            ],
            "question": "Who administers the oath of office to the President of India ? ",
            "answer": 3
        }, {
            "options": [
            "Punjab",
            "Gujarat",
            "Karnataka",
            "Uttar Pradesh"
            ],
            "question": "With which state is the Phulkari embroidery associated ? ",
            "answer": 0
        }, {
            "options": [
            "Dhaka",
            "Thimpu",
            "Kathmandu",
            "Islamabad"
            ],
            "question": "Which capital city houses the headquarters of the South Asian Association for Regional Cooperation (SAARC) ? ",
            "answer": 2
        }, {
            "options": [
            "Islam",
            "Judaism",
            "Christianity",
            "Zoroastrianism"
            ],
            "question": "Zend Avesta is the holy book of which religion ? ",
            "answer": 3
        }, {
            "options": [
            "Warangal",
            "Kurnool",
            "Vijayawada",
            "Visakhapatnam"
            ],
            "question": "Before Hyderabad, which city was the the capital of Andhra Pradesh (erstwhile Andhra State) ? ",
            "answer": 1
        }, {
            "options": [
            "Ramanathan Krishnan",
            "Vijay Amritraj",
            "Ramesh Krishnan",
            "Leander Paes"
            ],
            "question": "Who was the first Indian to win boy's Wimbledon Singles title in 1954 ? ",
            "answer": 0
        }, {
            "options": [
            "Alapuzha",
            "Ezhimala",
            "Vizhinjam",
            "Kozhikode"
            ],
            "question": "At which place in Kerala was the first tide (ocean wave) generated electricity project of India established ? ",
            "answer": 2
        }, {
            "options": [
            "Mao Zedong",
            "Zhou Enlai",
            "Deng Xiaoping",
            "Hua Guofeng"
            ],
            "question": "In 1954, with which Chinese premier did Indian PM Jawaharlal Nehru sign Panchsheel (five principles of peaceful co-existence) Pact ? ",
            "answer": 1
        }, {
            "options": [
            "Kalidas",
            "Kalhana",
            "Chankaya",
            "Banabhatt"
            ],
            "question": "Who authored the 'Rajatarangini', a historical chronicle of Kashmir ? ",
            "answer": 1
        }, {
            "options": [
            "Nek Chand",
            "Umesh Rao",
            "Bobby Kooka",
            "Savitri Khanolkar"
            ],
            "question": "Who designed the Param Vir Chakra medal, India's highest military award ? ",
            "answer": 3
        }, {
            "options": [
            "Heart",
            "Liver",
            "Kidney",
            "Stomach"
            ],
            "question": "Which is the heaviest organ in the human body ? ",
            "answer": 1
        }, {
            "options": [
            "Nainital",
            "Mussoorie",
            "Darjeeling",
            "Shimla"
            ],
            "question": "Which hill station was the summer capital of British India ? ",
            "answer": 3
        }, {
            "options": [
            "Iron",
            "Nickel",
            "Cobalt",
            "Aluminium"
            ],
            "question": "'Hematite' and 'Magnetite' are the principal ores of which metal ? ",
            "answer": 0
        }, {
            "options": [
            "Nepal",
            "Bhutan",
            "Bangladesh",
            "Sri Lanka"
            ],
            "question": "'Biman' is the national airline of which Asian country ? ",
            "answer": 2
        }, {
            "options": [
            "Babar",
            "Akbar",
            "Jehangir",
            "Shahjahan"
            ],
            "question": "In 1581, which Mughal ruler started religious doctrine 'Din-i-Ilahi' (Divine Faith) ? ",
            "answer": 1
        }, {
            "options": [
            "Russia",
            "Germany",
            "France",
            "United States of America"
            ],
            "question": "From which country did India procure the aircraft carier Admiral Gorshkov, scheduled to join Indian Navy as INS Vikramaditaya in 2012 ? ",
            "answer": 0
        }, {
            "options": [
            "Swarna Kamal (Golden Lotus)",
            "Rajat Kamal (Silver Lotus)",
            "Nargis Dutt Award",
            "Indira Gandhi Award"
            ],
            "question": "Which National Film Award is given to the Best First Film of a Director ? ",
            "answer": 3
        }, {
            "options": [
            "Punjab",
            "Manipur",
            "Kerala",
            "Jammu  Kashmir"
            ],
            "question": "'Kalaripayattu' is the traditional martial art of which Indian state ? ",
            "answer": 2
        }, {
            "options": [
            "Ajmer",
            "Srinagar",
            "Fatehpur Sikri",
            "Mumbai"
            ],
            "question": "Hazratbal Dargah, which houses the sacred hair of Prophet Mohammed, is situated in which city ? ",
            "answer": 1
        }, {
            "options": [
            "Mayawati",
            "J.Jayalalitha",
            "Sushma Swaraj",
            "Mamta Banerjee"
            ],
            "question": "'Struggle for Existence' book is the autobiography of which Indian woman leader ? ",
            "answer": 3
        }, {
            "options": [
            "Tamil",
            "Marathi",
            "Telugu",
            "Bengali"
            ],
            "question": "After Hindi, which is the second most spoken language in India ?",
            "answer": 3
        }, {
            "options": [
            "Russia",
            "Canada",
            "China",
            "United States of America"
            ],
            "question": "In terms of area, which is the largest country ?",
            "answer": 0
        }, {
            "options": [
            "Indira Gandhi",
            "Mother Teresa",
            "Aruna Asaf Ali",
            "M.S.Subbulakshmi"
            ],
            "question": "Who was the first woman to receive the Bharat Ratna, India's highest civilian award ?",
            "answer": 0
        }, {
            "options": [
            "Helium",
            "Oxygen",
            "Nitogen",
            "Hydrogen"
            ],
            "question": "Which is the only element whose atoms have no neutron ?",
            "answer": 3
        }, {
            "options": [
            "Indian Ocean",
            "Pacific Ocean",
            "Atlantic Ocean",
            "Antarctic Ocean"
            ],
            "question": "Challenger Deep, a part of Mariana Trench and the deepest point in the oceans, named after British ship Challenger II which first surveyed it in 1951, is located in which ocean ?",
            "answer": 1
        }, {
            "options": [
            "Forward Block",
            "Swaraj Party",
            "Swatantra Party",
            "Ghadar Party"
            ],
            "question": "In 1922, Chittarajnan Das and Motilal Nehru founded which political party ?",
            "answer": 1
        }, {
            "options": [
            "Arjun",
            "Kansa",
            "Ravana",
            "Parshuram"
            ],
            "question": "According to Hindu mythology, which warrior was the possessor of 'Chanrdrahas' sword ?",
            "answer": 2
        }, {
            "options": [
            "Assam",
            "Jammu  Kashmir",
            "West Bengal",
            "Madhya Pradesh"
            ],
            "question": "In which state is the Dachigam National Park, famous for Hangul (Red Deer), located ?",
            "answer": 1
        }, {
            "options": [
            "Fi-Hien",
            "Marco Polo",
            "Al Beruni",
            "Ibn Batuta"
            ],
            "question": "Which early 11th century traveller to India authored the books 'Tahqiq-i-Hind' and 'Kitab-ul-Hind' ?",
            "answer": 2
        }, {
            "options": [
            "Ayub Khan",
            "Liaquat Ali Khan",
            "Iskandar Mirza",
            "Muhammad Ali Jinnah"
            ],
            "question": "Who was the first President of Pakistan ?",
            "answer": 2
        }, {
            "options": [
            "Saurav Ganguly",
            "Rahul Dravid",
            "Mahendra Singh Dhoni",
            "Anil Kumble"
            ],
            "question": "After Sachin Tendulkar, who is the second cricketer to receive the Rajiv Gandhi Khel Ratna Award ? ",
            "answer": 2
        }, {
            "options": [
            "Bhopal",
            "Nagpur",
            "Allahabad",
            "Mumbai"
            ],
            "question": "Which city houses the headquarters of Central Railway ? ",
            "answer": 3
        }, {
            "options": [
            "Lord Mountbatten",
            "C.Rajagopalachari",
            "Rajendra Prasad",
            "Jawaharlal Nehru"
            ],
            "question": "Who was the first Indian Governor-General of independent India ? ",
            "answer": 1
        }, {
            "options": [
            "Bihu",
            "Lohri",
            "Pongal",
            "Baisakhi"
            ],
            "question": "'Bhogi', 'Surya', 'Mattu' and 'Kanum' are the parts of which four day long harvest festival of Tamilnadu ? ",
            "answer": 2
        }, {
            "options": [
            "Orissa",
            "Andhra Pradesh",
            "Tamilnadu",
            "Kerala"
            ],
            "question": "Wheeler Island, the site of India's missile testing facility Integrated Test Range (ITR), is situated in which state ? ",
            "answer": 0
        }, {
            "options": [
            "Chief Justice of India",
            "Prime Minister",
            "Lok Sabha Speaker",
            "Vice President"
            ],
            "question": "To whom does the President of India address his resignation ? ",
            "answer": 3
        }, {
            "options": [
            "Turkey",
            "Greece",
            "France",
            "Germany"
            ],
            "question": "Apart from Russia, the territory of which country lies in both Europe and Asia continents ? ",
            "answer": 0
        }, {
            "options": [
            "J.R.D.Tata",
            "Dhirubhai Ambani",
            "N.R.Narayana Murthy",
            "Azim Premji"
            ],
            "question": "In 1998, who became the first Indian ever to be awarded the Wharton School Dean's Medal ? ",
            "answer": 1
        }, {
            "options": [
            "Herodotus",
            "Hipparchus",
            "Hippocrates",
            "Wilhelm Wundt"
            ],
            "question": "Who is known as the 'Father of Medicine' ? ",
            "answer": 2
        }, {
            "options": [
            "Ramayana",
            "Mahabahrat",
            "Raghuvamsha",
            "Kumarsambhava"
            ],
            "question": "'Razmnama' is the Persian translation of which Indian epic ? ",
            "answer": 1
        }, {
            "options": [
            "L",
            "C",
            "M",
            "X"
            ],
            "question": "In Roman numerals, which letter represents one thousand ? ",
            "answer": 2
        }, {
            "options": [
            "Chand Bibi",
            "Razia Sultan",
            "Rani Durgavati",
            "Rani Rudramma Devi"
            ],
            "question": "Who was the only woman ruler of Delhi ? ",
            "answer": 1
        }, {
            "options": [
            "Sameer",
            "Gulzar",
            "Javed Akhtar",
            "Prasoon Joshi"
            ],
            "question": "How do we better know Oscar award winner lyricist Sampooran Singh Kalra, the writer of 'Jai Ho' song for film 'Slumdog Millionaire' ? ",
            "answer": 1
        }, {
            "options": [
            "Nanded (Maharashtra)",
            "Kolkata (W.Bengal)",
            "Kushinagar (U.P.)",
            "Pawapuri (Bihar)"
            ],
            "question": "Where did Lord Mahavira, the last of 24 tirthankars in Jain tradition, attain Nirvana ? ",
            "answer": 3
        }, {
            "options": [
            "Veer Savarkar",
            "Bhagat Singh",
            "Chandrasekhar Azad",
            "Lala Hardayal"
            ],
            "question": "In 1904, which revolutionary founded Abhinav Bharat Society ? ",
            "answer": 0
        }, {
            "options": [
            "Zurich (Switzerland)",
            "London (United Kingdom)",
            "Dubai (United Arab Emirates)",
            "Lausanne (Switzerland)"
            ],
            "question": "In which city are the headquarters of International Olympic Committee (IOC) located ? ",
            "answer": 3
        }, {
            "options": [
            "Lord Mayo",
            "Lord Curzon",
            "Lord Lytton",
            "Lord Irwin"
            ],
            "question": "In 1872, which Viceroy of India was assassinated at Port Blair in the Andaman Islands ? ",
            "answer": 0
        }, {
            "options": [
            "Canada",
            "Denmark",
            "Norway",
            "Iceland"
            ],
            "question": "Greenland, the largest island in world, is the part of which country ? ",
            "answer": 1
        }, {
            "options": [
            "Adam Osborne",
            "Charles Babbage",
            "Tim Burners-Lee",
            "Ian Wilmut"
            ],
            "question": "Who created the first cloned sheep Dolly ? ",
            "answer": 3
        }, {
            "options": [
            "Khyber pass",
            "Nathu La pass",
            "Elephant pass",
            "Rohtang pass"
            ],
            "question": "Which pass, connecting Sri Lankan mainland with Jaffna peninsula. is referred as the 'Gateway to Jaffna' ? ",
            "answer": 2
        }, {
            "options": [
            "15",
            "17",
            "19",
            "21"
            ],
            "question": "In tabletop game Carrom, how many coins are used ?",
            "answer": 2
        }, {
            "options": [
            "8 minutes",
            "10 minutes",
            "12 minutes",
            "15 minutes"
            ],
            "question": "How much time does Sunlight take to reach the Earth ?",
            "answer": 0
        }, {
            "options": [
            "Beta",
            "Gamma",
            "Sigma",
            "Omega"
            ],
            "question": "Alpha is the first letter of Greek alphabet. Which is the last ?",
            "answer": 3
        }, {
            "options": [
            "Ramagupta",
            "Skandagupta",
            "Samudragupta",
            "Chandragupta Vikramaditya"
            ],
            "question": "Which ruler of Gupta dynasty is also called the 'Napoleon of India' ?",
            "answer": 2
        }, {
            "options": [
            "Aravali",
            "Bailadila",
            "Nilgiri",
            "Patkai"
            ],
            "question": "Which mountain range in Chhatisgarh, with name literally meaning the hump of ox, is world famous for top-quality deposits of iron ore ?",
            "answer": 1
        }, {
            "options": [
            "Vikram Sarabhai",
            "Homi Bhabha",
            "M.S.Swaminathan",
            "A.P.J.Abdul Kalam"
            ],
            "question": "Which scientist is considered as the father of Indian Space Programme ?",
            "answer": 0
        }, {
            "options": [
            "Melanin",
            "Lycopene",
            "Bilirubin",
            "Chlorophyll"
            ],
            "question": "Which pigment is responsible for red colour of tomatoes ?",
            "answer": 1
        }, {
            "options": [
            "Adi Shankaracharya",
            "Nimbarkacharya",
            "Ramanujacharya",
            "Vallabhacharya"
            ],
            "question": "Who founded the 'Pushti Marg' (path of divine grace) sect of the Hindu religion ?",
            "answer": 3
        }, {
            "options": [
            "Philip Kotler",
            "Jack Welch",
            "C.K.Prahalad",
            "Mohanbir Sawhney"
            ],
            "question": "Who authored the book `The Fortune at the Bottom of the Pyramid' ?",
            "answer": 2
        }, {
            "options": [
            "Indian Ocean",
            "Antarctic Ocean",
            "Atlantic Ocean",
            "Pacific Ocean"
            ],
            "question": "Indira Mount, an underwater mountain named after former PM of India Smt. Indira Gandhi, is in which ocean ?",
            "answer": 1
        }, {
            "options": [
            "Lakshadweep",
            "Daman and Diu",
            "Puducherry",
            "Andaman and Nicobar Islands"
            ],
            "question": "Kavaratti, an island town, is the capital of which Indian union territory ? ",
            "answer": 0
        }, {
            "options": [
            "Punjab",
            "Maharashtra",
            "Gujarat",
            "West Bengal"
            ],
            "question": "Garba dance is native of which Indian state ? ",
            "answer": 2
        }, {
            "options": [
            "Thar",
            "Gobi",
            "Sahara",
            "Kalahari"
            ],
            "question": "Antarctica is the largest cold desert in the world. Which is the largest hot desert in the world ? ",
            "answer": 2
        }, {
            "options": [
            "Zakir Hussain",
            "Rajendra Prasad",
            "Fakhruddin Ali Ahmed",
            "V.V.Giri"
            ],
            "question": "Sadakat Ashram memorial in Patna is dedicated to which former President of India ? ",
            "answer": 1
        }, {
            "options": [
            "Jonas Salk",
            "Frederick Benting",
            "Alexander Fleming",
            "Ronald Ross"
            ],
            "question": "Who discoverd Penicillin ? ",
            "answer": 2
        }, {
            "options": [
            "Operation Vijay",
            "Operation Shakti",
            "Operation Cactus",
            "Operation Black Tornado"
            ],
            "question": "In Mumbai terror attacks on 26 Nov. 2008, what was the code name of security forces commando action against terrorists ? ",
            "answer": 3
        }, {
            "options": [
            "0 degree",
            "32 degre",
            "180 degree",
            "minus 40 degree"
            ],
            "question": "At which temprature, Celsius and Fahrenheit scales will show same reading ? ",
            "answer": 3
        }, {
            "options": [
            "The Times of India",
            "Mumbai Samachar",
            "The Indian Express",
            "Hindustan Times"
            ],
            "question": "Launched on 1st July 1822, which newspaper is the Asia's oldest extant daily ? ",
            "answer": 1
        }, {
            "options": [
            "Naina Lal Kidwai",
            "Lalita D. Gupte",
            "Kiran Mazumdar Shaw",
            "Chanda Kochhar"
            ],
            "question": "Who is the first Indian woman to graduate from the Harvard Business School ? ",
            "answer": 0
        }, {
            "options": [
            "Pyridine",
            "Isocyanide",
            "Cadaverine",
            "Ethyl Mercaptan"
            ],
            "question": "In domestic LPG cylinders, a small quantity of which foul smelling chemical is added to act as a warning agent in case of any gas leakage ? ",
            "answer": 3
        }, {
            "options": [
            "RBI Governor",
            "Finance Secretary",
            "Finance Minister",
            "President"
            ],
            "question": "Who signs one rupee currency note of India ? ",
            "answer": 1
        }, {
            "options": [
            "Karl Marx",
            "Friedrich Engles",
            "Leo Tolstoy",
            "Maxim Gorky"
            ],
            "question": "Who wrote the 'Das Capital', an extensive treatise on political economy ? ",
            "answer": 0
        }, {
            "options": [
            "Vallabhbhai Patel",
            "Rafi Ahmed Kidwai",
            "B.R.Ambedkar",
            "Maulana Abul Kalam Azad"
            ],
            "question": "Who was the first law minister of independent India ? ",
            "answer": 2
        }, {
            "options": [
            "Tea",
            "Coffee",
            "Yoghurt",
            "Lemonade"
            ],
            "question": "Arabica, Robusta and Liberica are the varieties of which popluar beverage ? ",
            "answer": 1
        }, {
            "options": [
            "Odissi",
            "Kathakali",
            "Bharatanatyam",
            "Kuchipudi"
            ],
            "question": "Which Indian classical dance form, native of Andhra Pradesh, was developed by Siddhendra Yogi from Bhamakalapam dance drama ? ",
            "answer": 3
        }, {
            "options": [
            "Dona Paula (Goa)",
            "Kochi (Kerala)",
            "Mumbai (Maharashtra)",
            "Visakhapatnam (Andhra Pradesh)"
            ],
            "question": "Where is the headquarters of the National Institute of Oceanography located ? ",
            "answer": 0
        }, {
            "options": [
            "Denmark",
            "Sweden",
            "Norway",
            "Finland"
            ],
            "question": "Which European country is known as the 'Land of a thousand lakes' ? ",
            "answer": 3
        }, {
            "options": [
            "Proxima Centauri",
            "Alpha Centauri A",
            "Alpha Centauri B",
            "Bernard's Star"
            ],
            "question": "Which is the nearest star to the Sun ? ",
            "answer": 0
        }, {
            "options": [
            "Ozone",
            "Methane",
            "Nitrous Oxide",
            "Carbon dioxide"
            ],
            "question": "Which gas is commonly known as 'Laughing Gas' ? ",
            "answer": 2
        }, {
            "options": [
            "Asia",
            "Africa",
            "Europe",
            "South America"
            ],
            "question": "Which is the only continent through which all three main latitude lines - Equator, Tropic of Cancer and Tropic of Capricorn - passes ? ",
            "answer": 1
        }, {
            "options": [
            "Mumbai",
            "Srinagar",
            "New Delhi",
            "Ajmer"
            ],
            "question": "In which city is the dargah (tomb) of sufi saint Moinuddin Chishti located ? ",
            "answer": 3
        }, {
            "options": [
            "Sitar",
            "Sarod",
            "Santoor",
            "Tabla"
            ],
            "question": "With with musical instrument is Pt. Ravi Shankar associated ? ",
            "answer": 0
        }, {
            "options": [
            "Rajkumari Amrit Kaur",
            "Sucheta Kriplani",
            "Vijay Laxmi Pandit",
            "Sarojini Naidu"
            ],
            "question": "In 1953, who became the first woman President of the United Nations General Assembly (UNGA) ? ",
            "answer": 2
        }, {
            "options": [
            "Loktak Lake",
            "Chilka Lake",
            "Wular Lake",
            "Hussain Sagar Lake"
            ],
            "question": "Which lake seprates the Hyderabad, capital of Andhra Pradesh, from its twin city Secunderabad ? ",
            "answer": 3
        }, {
            "options": [
            "Apsara",
            "Kamini",
            "Dhruva",
            "Aryabhatt"
            ],
            "question": "What is the name of India's first nuclear reactor ? ",
            "answer": 0
        }, {
            "options": [
            "Kheda (Gujarat)",
            "Champaran (Bihar)",
            "Sabarmati (Gujarat)",
            "Mumbai (Maharashtra)"
            ],
            "question": "At which place did Mahatama Gandhi start his first Satyagraha in India ? ",
            "answer": 1
        }, {
            "options": [
            "H.G.Khurana",
            "M.S.Swaminathan",
            "A.P.J.Abdul Kalam",
            "S.Chandrasekhar"
            ],
            "question": "'Wings of Fire' and 'Ignited Minds' books are authored by which Indian scientist ? ",
            "answer": 2
        }, {
            "options": [
            "Kerala",
            "Gujarat",
            "West Bengal",
            "Madhya Pradesh"
            ],
            "question": "The Gir Forest National Park (Sasan Gir), the only home of the Asiatic Lions, is situated in which state ? ",
            "answer": 1
        }, {
            "options": [
            "Akbar",
            "Jehangir",
            "Shahjahan",
            "Aurangzeb"
            ],
            "question": "Which Mughal emperor assumed the title of 'Alamgir' (Conqueror of the world) ? ",
            "answer": 3
        }, {
            "options": [
            "Aspirin",
            "Vinegar",
            "Vitamin C",
            "Vitriol"
            ],
            "question": "What is the common name of Acetylsalicylic Acid ? ",
            "answer": 0
        }, {
            "options": [
            "President",
            "Prime Minister",
            "Defence Minister",
            "Chief of Army Staff"
            ],
            "question": "Who is the Supreme Commander of Indian armed forces ? ",
            "answer": 0
        }, {
            "options": [
            "Hookworm",
            "Tapeworm",
            "Ringworm",
            "Roundworm"
            ],
            "question": "Which among the following is not a parasite ? ",
            "answer": 2
        }, {
            "options": [
            "Jawaharlal Nehru",
            "Maulana Abul Kalam Azad",
            "Subhash Chandra Bose",
            "C.Rajagopalachari"
            ],
            "question": "Who authored the book 'India Wins Freedom' ? ",
            "answer": 1
        }, {
            "options": [
            "Nepal",
            "Pakistan",
            "Bangladesh",
            "Japan"
            ],
            "question": "Jatiyo Sansad is the parliament of which country ? ",
            "answer": 2
        }, {
            "options": [
            "Surya",
            "Vishnu",
            "Shiva",
            "Ganesh"
            ],
            "question": "According to Hindu mythology, twin sisters Riddhi and Siddhi are wives of which God ? ",
            "answer": 3
        }, {
            "options": [
            "Surat",
            "Mumbai",
            "Chennai",
            "Kolkata"
            ],
            "question": "In 1612, where did the British establish their first factory (trading post) in India ? ",
            "answer": 0
        }, {
            "options": [
            "Ice Hockey",
            "Lawn Tennis",
            "Sumo Wrestling",
            "Track Cycling"
            ],
            "question": "Velodrome is an arena for which sporting event ? ",
            "answer": 3
        }, {
            "options": [
            "Isaac Newton",
            "Albert Einstein",
            "Louis Pasteur",
            "Thomas Alva Edison"
            ],
            "question": "Which scientist was known as 'Wizard of Menlo Park' ? ",
            "answer": 3
        }, {
            "options": [
            "Bimbisara",
            "Ajatashatru",
            "Chandragupta Maurya",
            "Bindusara"
            ],
            "question": "On the banks of river Ganga, which ruler of Magadh founded the city of Patliputra (modern Patna) ? ",
            "answer": 1
        }, {
            "options": [
            "Richard E. Byrd",
            "Robert Edwin Peary",
            "Roald Amundsen",
            "Lincoln Ellsworth"
            ],
            "question": "On 6th April 1909, who became the first person to reach the North Pole ? ",
            "answer": 1
        }, {
            "options": [
            "42 seconds",
            "52 seconds",
            "62 seconds",
            "72 seconds"
            ],
            "question": "What is the approximate playing time of full version of 'Jana Gana Mana', the National Anthem of India ?",
            "answer": 1
        }, {
            "options": [
            "Srinagar",
            "Hyderabad",
            "Lucknow",
            "Jodhpur"
            ],
            "question": "Which city is famous for Chikankari embroidery ?",
            "answer": 2
        }, {
            "options": [
            "Goa",
            "Sikkim",
            "Mizoram",
            "Arunachal Pradesh"
            ],
            "question": "In terms of population, which is the smallest state in India ?",
            "answer": 1
        }, {
            "options": [
            "Mars",
            "Venus",
            "Mercury",
            "Jupiter"
            ],
            "question": "Phobos and Deimos are two moons (natural satellite) of which planet ?",
            "answer": 0
        }, {
            "options": [
            "Goa",
            "Assam",
            "Kerala",
            "Jharkhand"
            ],
            "question": "Which state will host 34th National Games in June 2009 ?",
            "answer": 3
        }, {
            "options": [
            "China",
            "Russia",
            "Israel",
            "Pakistan"
            ],
            "question": "Mossad is the national intelligence agency of which country ?",
            "answer": 2
        }, {
            "options": [
            "Madurai",
            "Thanjavur",
            "Warangal",
            "Vijayanagar"
            ],
            "question": "Situated on the banks of Vaigai river, which city was the capital of Pandya Dynasty ?",
            "answer": 0
        }, {
            "options": [
            "Plasma",
            "Red Blood Cells (Erythrocytes)",
            "White Blood Cells (Leukocytes)",
            "Platelets (Thrombocytes)"
            ],
            "question": "Which constituent of human blood is responsible for blood clotting ?",
            "answer": 3
        }, {
            "options": [
            "Finland",
            "Norway",
            "Australia",
            "New Zealand"
            ],
            "question": "Which was the first country to give women the right to vote in elections ?",
            "answer": 3
        }, {
            "options": [
            "Eka",
            "Tesla",
            "Param",
            "Deep Blue"
            ],
            "question": "What is the name of world's first Personal Supercomputer, which is upto 250 times faster than standard PCs ?",
            "answer": 1
        }, {
            "options": [
            "25 years",
            "30 years",
            "35 years",
            "40 years"
            ],
            "question": "What is the minimum age limit to become the President of India ?",
            "answer": 2
        }, {
            "options": [
            "Ruskin Bond",
            "J.K.Rowling",
            "Enid Blyton",
            "R.K.Narayan"
            ],
            "question": "Who created fictional character Harry Potter ?",
            "answer": 1
        }, {
            "options": [
            "Beriberi",
            "Scurvy",
            "Rickets",
            "Nyctalopia (Night Blindness)"
            ],
            "question": "In humans, the deficiency of Vitamin C leads to which disease ?",
            "answer": 1
        }, {
            "options": [
            "Lala Lajpat Rai",
            "Bal Gangadhar Tilak",
            "Chittaranjan Das",
            "C.F.Andrews"
            ],
            "question": "Which freedom fighter was popularly known as `Deshbandhu' ?",
            "answer": 2
        }, {
            "options": [
            "Rajkot",
            "Ahmedabad",
            "Mumbai",
            "Lahore"
            ],
            "question": "On 7th April 1875, in which city did Swami Dayanand Saraswati found the Arya Samaj ?",
            "answer": 2
        }, {
            "options": [
            "Raghupati Sahay",
            "Dhanpatrai Srivastava",
            "Akhtar Hussain Rizvi",
            "Sampooran Singh Kalra"
            ],
            "question": "What was the original name of renowned Hindi and Urdu writer Munshi Premchand ?",
            "answer": 1
        }, {
            "options": [
            "Karna",
            "Dronacharya",
            "Ashwathama",
            "Shalya"
            ],
            "question": "In the Mahabharat, who killed Bhima's son Ghatotkacha ?",
            "answer": 0
        }, {
            "options": [
            "Dadabahi Naoroji",
            "Badruddin Tyabji",
            "Pherozeshah Mehta",
            "Womesh Chandra Bonnerjee"
            ],
            "question": "Who was the first president of the Indian National Congress ?",
            "answer": 3
        }, {
            "options": [
            "Charak",
            "Sushruta",
            "Patanjali",
            "Panini"
            ],
            "question": "Who wrote 'Ashtadhyayi', the earliest existing grammar of Sanskrit ?",
            "answer": 3
        }, {
            "options": [
            "Ever Onward",
            "Friendship Through Sport",
            "Humanity - Equality - Destiny",
            "Swifter, Higher, Stronger"
            ],
            "question": "Which among the following is the motto of the Asian Games ?",
            "answer": 0
        }, {
            "options": [
            "Liver",
            "Spleen",
            "Pancreas",
            "Stomach"
            ],
            "question": "In human body, Bile is produced by which organ ? ",
            "answer": 0
        }, {
            "options": [
            "Bhagmati",
            "Mehrunnisa",
            "Manikarnika",
            "Arjumand Banu Begum"
            ],
            "question": "What was the original name of Mughal empress Noor Jahan ? ",
            "answer": 1
        }, {
            "options": [
            "5",
            "7",
            "9",
            "11"
            ],
            "question": "Which among the following is not a Prime number ? ",
            "answer": 2
        }, {
            "options": [
            "Dubai",
            "London",
            "Monaco",
            "Sharjah"
            ],
            "question": "Which city houses the headquarters of International Cricket Council (ICC) ? ",
            "answer": 0
        }, {
            "options": [
            "Arsenic",
            "Carbon",
            "Selenium",
            "Germanium"
            ],
            "question": "Graphite and Diamond are allotropes of which element ? ",
            "answer": 1
        }, {
            "options": [
            "Lala Lajpat Rai",
            "Bal Gangadhar Tilak",
            "Gopal Krishna Gokhale",
            "Gopal Hari Deshmukh"
            ],
            "question": "In 1905, who founded the Servants of India Society in Pune ? ",
            "answer": 2
        }, {
            "options": [
            "Kapil Dev",
            "Bishen Singh Bedi",
            "Narendra Hirwani",
            "Anil Kumble"
            ],
            "question": "Who is the only Indian cricketer to have taken all 10 wickets in a Test innings ? ",
            "answer": 3
        }, {
            "options": [
            "Kerala",
            "Karnataka",
            "Manipur",
            "West Bengal"
            ],
            "question": "In which Indian state is the Keibul Lamjao, world's only floating National Park, situated ? ",
            "answer": 2
        }, {
            "options": [
            "Julius Nyerere",
            "Nelson Mandela",
            "Gerhard Fischer",
            "John Hume"
            ],
            "question": "In 1995, who became first recipient of the International Gandhi Peace Prize ? ",
            "answer": 0
        }, {
            "options": [
            "Zakir Hussain",
            "Amjad Ali Khan",
            "Pt.Shiv Kuamr Sharma",
            "Pt.Ravishankar"
            ],
            "question": "'My Music, My Life' and 'Raga Mala' books are the autobiographies of which music maestro ? ",
            "answer": 3
        }, {
            "options": [
            "Grains",
            "Pulses",
            "Oilseeds",
            "Fruits and Vegetables"
            ],
            "question": "The significant rise in production of which commodity is referred as `Yellow Revolution' ?",
            "answer": 2
        }, {
            "options": [
            "18 yards",
            "20 yards",
            "22 yards",
            "24 yards"
            ],
            "question": "What is the length of a Cricket pitch, measured between two sets of wickets ?",
            "answer": 2
        }, {
            "options": [
            "Baba Amte",
            "C.Rajagopalachari",
            "C.F.Andrews",
            "Vinoba Bhave"
            ],
            "question": "Which associate of Mahatma Gandhi founded Paunar Ashram near Wardha in Maharashtra ?",
            "answer": 3
        }, {
            "options": [
            "New Delhi",
            "Mumbai",
            "Chennai",
            "Kolkata"
            ],
            "question": "Where is the headquarters of Reserve Bank of India (RBI) ?",
            "answer": 1
        }, {
            "options": [
            "Surya",
            "Brahma",
            "Vishnu",
            "Shiv"
            ],
            "question": "Gayatri Mantra is addressed to which Hindu god ?",
            "answer": 0
        }, {
            "options": [
            "Rewa",
            "Arjun",
            "Chetak",
            "Shaktiman"
            ],
            "question": "What is the name of India's first electric Car ?",
            "answer": 0
        }, {
            "options": [
            "Battle of Buxar (1764)",
            "Battle of Plassey (1757)",
            "Third Battle of Panipat (1761)",
            "Second Battle of Tarain (1192)"
            ],
            "question": "In which battle was Prithviraj Chauhan, the ruler of Delhi, decisively defeated by Afghan ruler Muhammad Ghori ?",
            "answer": 3
        }, {
            "options": [
            "Carbon",
            "Oxygen",
            "Hydrogen",
            "Nitrogen"
            ],
            "question": "Which element is necessarily present in all acids ?",
            "answer": 2
        }, {
            "options": [
            "Bill Gates",
            "Larry Ellison",
            "Michael Dell",
            "Sergey Brin"
            ],
            "question": "Which IT entrepreneur authored the book `Business at the speed of thought' ?",
            "answer": 0
        }, {
            "options": [
            "Himalayas",
            "Karakoram",
            "Hindu Kush",
            "Tien Shan"
            ],
            "question": "In which mountain range is the Siachen Glacier, the world's longest glacier, located ?",
            "answer": 1
        }, {
            "options": [
            "Expert",
            "Express",
            "Experience",
            "Extra Power"
            ],
            "question": "In Windows XP operating system, what is the `XP' short for ? ",
            "answer": 2
        }, {
            "options": [
            "Neem",
            "Peepal",
            "Aam (Mango)",
            "Bargad (Banyan)"
            ],
            "question": "What is the common name of Indian national tree `Ficus Bengalensis' ? ",
            "answer": 3
        }, {
            "options": [
            "Gwalior",
            "Patiala",
            "Bangalore",
            "Chennai"
            ],
            "question": "In which city is the Netaji Subhash National Institute of Sports situated ? ",
            "answer": 1
        }, {
            "options": [
            "60 years",
            "62 years",
            "65 years",
            "70 years"
            ],
            "question": "What is the retirement age of Supreme Court judges ? ",
            "answer": 2
        }, {
            "options": [
            "Adi Shankaracharya",
            "Swami Vivekanand",
            "Swami Dayanand Saraswati",
            "Swami Prabhupada"
            ],
            "question": "Which religious teacher established four maths in four corners of country at Badrinath (North), Dwarka (West), Puri (East)  Sringeri (South) ? ",
            "answer": 0
        }, {
            "options": [
            "France",
            "Ireland",
            "United Kingdom",
            "United States of America"
            ],
            "question": "From which country's constitution, the concept of the Directive Principles of State Policy has been adopted in Indian constitution ? ",
            "answer": 1
        }, {
            "options": [
            "Agriculture",
            "Industry",
            "Services",
            "All contribute equally"
            ],
            "question": "Which sector is the biggest contributor to India's GDP ? ",
            "answer": 2
        }, {
            "options": [
            "Hepatitis B",
            "Measles",
            "Tetanus",
            "Plague"
            ],
            "question": "Bubonic, Pnuemonic and Septicemic are the forms of which deadly infectious disease caused by Yersinia Pestis bacterium ? ",
            "answer": 3
        }, {
            "options": [
            "Sam Pitroda",
            "C.Rangarajan",
            "Raghunath Anant Mashelkar",
            "A.P.J.Abdul Kalam"
            ],
            "question": "Who is the Chairman of the National Knowledge Commission ? ",
            "answer": 0
        }, {
            "options": [
            "Percy Spencer",
            "Martin Cooper",
            "Tim Berners-Lee",
            "Edwin Land"
            ],
            "question": "Who among the following is considered as the father of Mobile Phone ? ",
            "answer": 1
        }, {
            "options": [
            "Devika Rani Roerich",
            "Prithviraj Kapoor",
            "B.N.Sirkar",
            "Pankaj Mullick"
            ],
            "question": "In 1970, who became the first recipient of the Dadasaheb Phalke Award ?",
            "answer": 0
        }, {
            "options": [
            "Orissa",
            "Madhya Pradesh",
            "Maharashtra",
            "West Bengal"
            ],
            "question": "Bomakai and Sambalpuri saris are native of which state ?",
            "answer": 0
        }, {
            "options": [
            "Faizi",
            "Birbal",
            "Abul Fazl",
            "Abdul Rahim Khan-i-khana"
            ],
            "question": "`Akbarnama', a biographical account of Mughal ruler Akbar, was authored by ?",
            "answer": 2
        }, {
            "options": [
            "Bat",
            "Shark",
            "Dolphin",
            "Blue Whale"
            ],
            "question": "Which among the following is not a mammal ?",
            "answer": 1
        }, {
            "options": [
            "Paris",
            "Tokyo",
            "Shanghai",
            "New York"
            ],
            "question": "Which city is known as the `Big Apple' ?",
            "answer": 3
        }, {
            "options": [
            "Prakash Nath",
            "Prakash Padukone",
            "Nandu M. Natekar",
            "Pullela Gopichand"
            ],
            "question": "Who was the first Indian to win All England Open Badminton Championships Singles title ?",
            "answer": 1
        }, {
            "options": [
            "Chenab",
            "Jhelum",
            "Ravi",
            "Sutlej"
            ],
            "question": "On which river is Bhakra Nangal Dam, the highest gravity dam in world, is constructed ?",
            "answer": 3
        }, {
            "options": [
            "Daman and Diu",
            "Dadra and Nagar Haveli",
            "Lakshadweep",
            "Pondicherry"
            ],
            "question": "Apart from Delhi, which other Union Territory has its own elected Vidhan Sabha and the executive council of ministers headed by a Chief Minister ?",
            "answer": 3
        }, {
            "options": [
            "Ayub Khan",
            "Yahya Khan",
            "Zulfikar Ali Bhutto",
            "Muhammad Zia-ul-Haq"
            ],
            "question": "On 2nd July 1972, with which Pakistani leader did Indira Gandhi sign Shimla Agreement ?",
            "answer": 2
        }, {
            "options": [
            "Dinshaw Edulji Wacha",
            "Dadabhai Naoroji",
            "Gopal Krishna Gokhale",
            "Womesh Chandra Bonerjee"
            ],
            "question": "Which freedom fighter highlighted the drain of India's wealth into Britain, in his book `Poverty and Un-British Rule in India' in 1901 ?",
            "answer": 1
        }, {
            "options": [
            "Ganga",
            "Yamuna",
            "Gomti",
            "Godavari"
            ],
            "question": "On the banks of which river is Lucknow, the capital of Uttar Pradesh, situated ?",
            "answer": 2
        }, {
            "options": [
            "Mahavira",
            "Gautam Buddha",
            "Guru Nanak Dev",
            "Guru Gobind Singh"
            ],
            "question": "Jataka Tales, written in Pali language, are the previous birth stories of which religious Guru ?",
            "answer": 1
        }, {
            "options": [
            "Rabindranath Tagore",
            "Kazi Nazrul Islam",
            "Mohammed Iqbal",
            "Taslima Nasrin"
            ],
            "question": "Who wrote Bangladesh's national anthem 'Amar Shonar Bangla' ?",
            "answer": 0
        }, {
            "options": [
            "Indra",
            "Vishnu",
            "Ganesh",
            "Kartikeya"
            ],
            "question": "Parvani, the peacock, is mount of which Hindu God ?",
            "answer": 3
        }, {
            "options": [
            "Puri",
            "Cuttack",
            "Rourkela",
            "Sambalpur"
            ],
            "question": "Before Bhubaneswar, which city was the capital of Orissa ?",
            "answer": 1
        }, {
            "options": [
            "Geet Sethi",
            "Pullela Gopichand",
            "Vishwanathan Anand",
            "Sachin Tendulkar"
            ],
            "question": "Who was the first recipient of Rajiv Gandhi Khel Ratna Award ?",
            "answer": 2
        }, {
            "options": [
            "Brussels",
            "Geneva",
            "New York",
            "Paris"
            ],
            "question": "In which city are the headquarters of European Union (EU) located ?",
            "answer": 0
        }, {
            "options": [
            "Genghis Khan",
            "Attila the Hun",
            "Napolean Bonaparte",
            "Alexander the Great"
            ],
            "question": "Which conquerer was born in Macedonia (Europe), died in Babylon (Asia) and buried in Alexandria (Africa) ?",
            "answer": 3
        }, {
            "options": [
            "Copper Sulphate",
            "Ammonium Nitrate",
            "Silver Iodide",
            "Potassium Premanganate"
            ],
            "question": "To produce artificial rains, which chemical is used for Cloud Seeding ?",
            "answer": 2
        }, {
            "options": [
            "Punjab",
            "Haryana",
            "Rajasthan",
            "Uttar Pradesh"
            ],
            "question": "Binola village, the scheduled site of the Indian National Defence University (INDU), is in which state ?",
            "answer": 1
        }, {
            "options": [
            "Mercury",
            "Cesium",
            "Gallium",
            "Rubidium"
            ],
            "question": "Which is the only metal that exists in liquid form at normal room temprature (25 degree Celsius) ?",
            "answer": 0
        }, {
            "options": [
            "Chetak",
            "Kanthak",
            "Marengo",
            "Bucephalus"
            ],
            "question": "What was the name of Maharana Pratap's faithful horse ?",
            "answer": 0
        }, {
            "options": [
            "50 days",
            "100 days",
            "150 days",
            "200 days"
            ],
            "question": "Under National Rural Employment Guarantee Act (NREGA), how many minimum no. of days  guaranteed wage employment is provided in every financial year to a rural  household ?",
            "answer": 1
        }, {
            "options": [
            "Dog",
            "Cow",
            "Horse",
            "Elephant"
            ],
            "question": "According to Hindu mythology, what kind of animal is Kamadhenu ?",
            "answer": 1
        }, {
            "options": [
            "B.R.Ambedkar",
            "Lal Bahadur Shastri",
            "Maulana Abul Kalam Azad",
            "Vallabhbhai Patel"
            ],
            "question": "Who was the first Deputy Prime Minister of India ?",
            "answer": 3
        }, {
            "options": [
            "Tokyo",
            "Shanghai",
            "New Delhi",
            "Kuala Lumpur"
            ],
            "question": "In 2010, which Asian city will host Commonwealth Games ?",
            "answer": 2
        }, {
            "options": [
            "Sarojini Naidu",
            "Nellie Sengupta",
            "Indira Gandhi",
            "Sonia Gandhi"
            ],
            "question": "Annie Besant, a British lady, was first woman President of Indian National Congress(INC). Who was the first Indian woman President of INC ?",
            "answer": 0
        }, {
            "options": [
            "Arctic Ocean",
            "Pacific Ocean",
            "Indian Ocean",
            "Atlantic Ocean"
            ],
            "question": "Java Trench, also called Sunda Trench, is the deepest point in which ocean ?",
            "answer": 2
        }, {
            "options": [
            "Cuban Revolution",
            "American Revolution",
            "Chinese Revolution",
            "French Revolution"
            ],
            "question": "`Liberty, Equality and Fraternity' was the motto of which revolution ?",
            "answer": 3
        }, {
            "options": [
            "Bill Clinton",
            "George W. Bush",
            "Barack Obama",
            "Ronald Reagan"
            ],
            "question": "`Dreams from My Father' and `The Audicity of Hope' books are authored by which American President ?",
            "answer": 2
        }, {
            "options": [
            "Kangra",
            "Mysore",
            "Tanjore",
            "Madhubani"
            ],
            "question": "The name of which painting style, based on the name of a district in Bihar, literally means `Forest of Honey' ? ",
            "answer": 3
        }, {
            "options": [
            "C.K.Naidu",
            "Dhyan Chand",
            "Milkha Singh",
            "Wilson Jones"
            ],
            "question": "Whose birthday on 29 August is celebrated as `National Sports Day' in India ? ",
            "answer": 1
        }, {
            "options": [
            "Raj Ghat",
            "Shantivan",
            "Vijay Ghat",
            "Shakti Sthal"
            ],
            "question": "What is Mahatma Gandhi's samadhi in Delhi Called ? ",
            "answer": 0
        }, {
            "options": [
            "Satpura",
            "Vindhya",
            "Aravali",
            "Himalaya"
            ],
            "question": "Guru Shikhar, in Mount Abu, is the highest peak of which mountain range ? ",
            "answer": 2
        }, {
            "options": [
            "Hyderabad",
            "Bengaluru",
            "Chennai",
            "Thiruvananthapuram"
            ],
            "question": "`Silicon Valley of India' is the nickname of which south Indian city ? ",
            "answer": 1
        }, {
            "options": [
            "Dhanvantri",
            "Shukracharya",
            "Brihaspati",
            "Vishvakarma"
            ],
            "question": "According to Hindu mythology, who is the Guru of Devas (Gods) ? ",
            "answer": 2
        }, {
            "options": [
            "Yeast",
            "Mushroom",
            "Insulin",
            "Penicillin"
            ],
            "question": "Which one of the following is not a fungus ? ",
            "answer": 2
        }, {
            "options": [
            "Lord Irwin",
            "Lord Curzon",
            "Lord Hardinge",
            "Lord Chelmsford"
            ],
            "question": "In 1905, which Viceroy of India effected the Partition of Bengal ? ",
            "answer": 1
        }, {
            "options": [
            "Somadeva",
            "Kautilya",
            "Narayan Pandit",
            "Vishnu Sharma"
            ],
            "question": "`Panchatantra', a collection of moral stories in Sanskrit, was authored by ? ",
            "answer": 3
        }, {
            "options": [
            "Goa",
            "Mizoram",
            "Nagaland",
            "Jammu  Kashmir"
            ],
            "question": "Which is the only state in India to have Common Civil Code in force ? ",
            "answer": 0
        }, {
            "options": [
            "Rajasthan",
            "Madhya Pradesh",
            "Andhra Pradesh",
            "Tamil Nadu"
            ],
            "question": "In 2007, which state re-established its Vidhan Parishad (Legislative Council) after a gap of 22 years ? ",
            "answer": 2
        }, {
            "options": [
            "Decibel",
            "Ampere",
            "Parsec",
            "Tesla"
            ],
            "question": "Which unit is used to measure the intensity of sound ? ",
            "answer": 0
        }, {
            "options": [
            "Rabindranath Tagore",
            "Bankim Chandra Chatterjee",
            "Muhammad Iqbal",
            "Kavi Pradeep"
            ],
            "question": "Who wrote the patriotic song `Saare Jahan Se Achcha' ? ",
            "answer": 2
        }, {
            "options": [
            "Lumbini",
            "Kushinagar",
            "Nanded",
            "Pavapuri"
            ],
            "question": "In which town of Uttar Pradesh did Gautam Buddha attain Mahaparinirvana (salvation) ? ",
            "answer": 1
        }, {
            "options": [
            "President",
            "Prime Minister",
            "Lok Sabha Speaker",
            "Rajya Sabha Speaker"
            ],
            "question": "Who presides over the joint sittings of both houses of Parliament ? ",
            "answer": 2
        }, {
            "options": [
            "Nepal",
            "Bhutan",
            "Myanmar",
            "China"
            ],
            "question": "Nathu La Pass, located in Sikkim, connects India with which country ? ",
            "answer": 3
        }, {
            "options": [
            "Sunil Gavaskar",
            "Sachin Tendulkar",
            "V.V.S.Laxman",
            "Virender Sehwag"
            ],
            "question": "Who is the only Indian batsman to score Triple Century in Test Cricket ? ",
            "answer": 3
        }, {
            "options": [
            "Darjeeling",
            "Srinagar",
            "Nainital",
            "Shimla"
            ],
            "question": "In which hill station is the Himalayan Mountaineering Institute (HMI) located ? ",
            "answer": 0
        }, {
            "options": [
            "Billion",
            "Trillion",
            "Octillion",
            "Googol"
            ],
            "question": "What term is used to refer the large number which is formed by writing digit 1 followed by 100 zeros ? ",
            "answer": 3
        }, {
            "options": [
            "Commonwealth Games 2010",
            "FIFA Football World Cup 2010",
            "Cricket World Cup 2011",
            "Olympic Games 2012"
            ],
            "question": "Zakumi, a leopard, is the official mascot of which tournament ? ",
            "answer": 1
        }, {
            "options": [
            "N.R.Narayan Murthy",
            "N.S.Raghavan",
            "Nandan Nilekani",
            "Kris Gopalakrishnan"
            ],
            "question": "Which co-founder of Infosys, wrote the book `Imagining India : Ideas for the New Century' ? ",
            "answer": 2
        }, {
            "options": [
            "Citric Acid",
            "Acetic Acid",
            "Lactic Acid",
            "Tartaric Acid"
            ],
            "question": "What is the scientific name of Vinegar ? ",
            "answer": 1
        }, {
            "options": [
            "President",
            "Vice President",
            "Prime Minister",
            "Lok Sabha Speaker"
            ],
            "question": "Who is the ex-officio chairman of Rajya Sabha ? ",
            "answer": 1
        }, {
            "options": [
            "Abhinav Bindra",
            "Vijender Kumar",
            "Leander Paes",
            "Rajyavardhan Singh Rathore"
            ],
            "question": "In 2008, who became the first Indian to win an individual gold medal in the Olympic Games ? ",
            "answer": 0
        }, {
            "options": [
            "N.T.Rama Rao",
            "M.G.Ramachandran",
            "Sivaji Ganesan",
            "J.Jayalalithaa"
            ],
            "question": "Which film star founded the Telugu Desham Party ? ",
            "answer": 0
        }, {
            "options": [
            "Lara Dutta",
            "Reita Faria",
            "Aishwarya Rai",
            "Sushmita Sen"
            ],
            "question": "Who was the first Indian woman to win Miss Universe title in 1994 ? ",
            "answer": 3
        }, {
            "options": [
            "Wular Lake,",
            "Pulicat Lake",
            "Kaliveli Lake",
            "Chilka Lake"
            ],
            "question": "Which is the largest brackish water lake in India ? ",
            "answer": 3
        }, {
            "options": [
            "Shaan",
            "Lucky Ali",
            "Kumar Sanu",
            "Kishore Kumar"
            ],
            "question": "How do we better know playback singer Kedarnath Bhattacharya ? ",
            "answer": 2
        }, {
            "options": [
            "Verghese Kurien",
            "M.S.Swaminathan",
            "Raja Ramanna",
            "A.P.J.Abdul Kalam"
            ],
            "question": "Which scientist is known as the Father of the Green Revolution in India ? ",
            "answer": 1
        }, {
            "options": [
            "Jaipur",
            "Lucknow",
            "Chandigarh",
            "Dehradun"
            ],
            "question": "Which city is served by Jolly Grant Airport ? ",
            "answer": 3
        }, {
            "options": [
            "Sericulture",
            "Viticulture",
            "Horticulture",
            "Apiculture"
            ],
            "question": "Which term is used to describe the rearing of silkworms for the production of raw silk ? ",
            "answer": 0
        }, {
            "options": [
            "Copper",
            "Gold",
            "Silver",
            "Aluminium"
            ],
            "question": "Which metal is the best conductor of electric current ? ",
            "answer": 2
        }, {
            "options": [
            "Vitamin A",
            "Vitamin B",
            "Vitamin C",
            "Vitamin D"
            ],
            "question": "What is the popular name of Ascorbic acid ? ",
            "answer": 2
        }, {
            "options": [
            "Morarji Desai",
            "Atal Behari Vajpayee",
            "V.P.Singh",
            "P.V.Narasimha Rao"
            ],
            "question": "Who was the first person to address the United Nations in Hindi ? ",
            "answer": 1
        }, {
            "options": [
            "Prime Meridian",
            "Equator",
            "Tropic of Cancer",
            "Tropic of Capricorn"
            ],
            "question": "Which imaginary line, located at zero degrees latitude, divides the earth into Northern and Southern hemispheres ? ",
            "answer": 1
        }, {
            "options": [
            "Agra",
            "Mathura",
            "Delhi",
            "Allahabad"
            ],
            "question": "Which city did Sikandar Lodi found in 1504 on the banks of Yamuna river ? ",
            "answer": 0
        }, {
            "options": [
            "Muhammad Ali Jinnah",
            "Allama Iqbal",
            "Liaquat Ali Khan",
            "Chaudhary Rahmat Ali"
            ],
            "question": "Who coined the name `Pakistan' ? ",
            "answer": 3
        }, {
            "options": [
            "Swami Vivekanand",
            "Chaitanya Mahaprabhu",
            "Swami Dayanand Saraswati",
            "Swami Prabhupada"
            ],
            "question": "Vishvambhar Mishra was the original name of which spiritual guru ? ",
            "answer": 1
        }, {
            "options": [
            "Mahatma Gandhi",
            "Jawahar Lal Nehru",
            "Sardar Patel",
            "J.B.Kriplani"
            ],
            "question": "At the time of independence, who was the president of Indian National Congress ? ",
            "answer": 3
        }, {
            "options": [
            "Vinoba Bhave",
            "Baba Amte",
            "Satyajit Ray",
            "Jai Prakash Narain"
            ],
            "question": "In 1958, who became the first Indian to receive Raman Magsaysay Award ? ",
            "answer": 0
        }, {
            "options": [
            "Gresham's Law",
            "Murphy's Law",
            "Say's Law",
            "Parkinson's Law"
            ],
            "question": "What is the observation that `Supply creates its own demand' is popularly called ?",
            "answer": 2
        }, {
            "options": [
            "Annie Besant",
            "Madan Mohan Malaviya",
            "Syed Ahmed Khan",
            "S.Radhakrishnan"
            ],
            "question": "In 1916, who founded Banaras Hindu University in Varanasi ?",
            "answer": 1
        }, {
            "options": [
            "Rishabh Dev",
            "Neminath",
            "Parshavnath",
            "Mahavir"
            ],
            "question": "Who was the first Jain Tirthankar ?",
            "answer": 0
        }, {
            "options": [
            "Geneva",
            "Vienna",
            "Brussels",
            "The Hague"
            ],
            "question": "Where are the headquarters of the Organisation of Petroleum Exporting Countries (OPEC) situated ?",
            "answer": 1
        }, {
            "options": [
            "A",
            "B",
            "AB",
            "O"
            ],
            "question": "Which blood group is universal donor ?",
            "answer": 3
        }, {
            "options": [
            "Danny Boyle",
            "David Fincher",
            "Stephen Daldry",
            "Ron Howard"
            ],
            "question": "Who directed 8 Oscar awards winning film 'Slumdog Millionaire' ?",
            "answer": 0
        }, {
            "options": [
            "Dennis Tito",
            "Mark Shuttleworth",
            "Gregory Olsen",
            "Anousheh Ansari"
            ],
            "question": "Who became the first space tourist on 28 April, 2001 ?",
            "answer": 0
        }, {
            "options": [
            "Chola",
            "Pallava",
            "Chandela",
            "Chalukya"
            ],
            "question": "Khajuraho temples were built by rulers of which dynasty ?",
            "answer": 2
        }, {
            "options": [
            "G.D.Birla",
            "Dhirubhai Ambani",
            "Jamnalal Bajaj",
            "J.R.D.Tata"
            ],
            "question": "The book `Beyond The Last Blue Mountain' written by R.M.Lala is the biography of which industrialist ?",
            "answer": 3
        }, {
            "options": [
            "Turin (Italy)",
            "Sochi (Russia)",
            "Vancouver (Canada)",
            "Salt Lake City (USA)"
            ],
            "question": "Which city will host Winter Olympics in 2010 ?",
            "answer": 2
        }, {
            "options": [
            "Puri",
            "Dwarka",
            "Badrinath",
            "Rameshwaram"
            ],
            "question": "Out of four Hindu Dhams, three are dedicated to lord Vishnu  one to lord Shiva. Which one is dedicated to lord Shiva ? ",
            "answer": 3
        }, {
            "options": [
            "Green",
            "Purple",
            "Orange",
            "Brown"
            ],
            "question": "By mixing equal amount of Blue and Yellow colours, which colour will result ? ",
            "answer": 0
        }, {
            "options": [
            "Gopal Krishan Gokhle",
            "Jai Praksha Narain",
            "Bal Gangadhar Tilak",
            "Lala Lajpat Rai"
            ],
            "question": "Which freedom fighter is also known as Lokmanya ? ",
            "answer": 2
        }, {
            "options": [
            "4:00 Hours",
            "4:30 Hours",
            "5:00 Hours",
            "5:30 Hours"
            ],
            "question": "By how many hours Indian Standard Time (IST) is ahead of Greenwich Mean Time (GMT) ? ",
            "answer": 3
        }, {
            "options": [
            "Jagadish Chandra Bose",
            "Satyendra Nath Bose",
            "Jayant Narlikar",
            "Meghnad Saha"
            ],
            "question": "Crescograph, a device for measuring growth in plants, was invented by which Indian scientist ? ",
            "answer": 0
        }, {
            "options": [
            "Karachi",
            "Mumbai",
            "Kolkata",
            "Lucknow"
            ],
            "question": "On August 8, 1942, in which city Indian National Congress passed Quit India Resolution ? ",
            "answer": 1
        }, {
            "options": [
            "Lakshadweep",
            "Andaman  Nicobar Islands",
            "Kerala",
            "Tamilnadu"
            ],
            "question": "Where is the Indira Point, the southernmost point of land in the territory of India, situated ? ",
            "answer": 1
        }, {
            "options": [
            "Mumtaz",
            "Noorjahan",
            "Hazrat Mahal",
            "Manmati"
            ],
            "question": "In history, how do we better know Mughal empress Arjumand Banu Begum ? ",
            "answer": 0
        }, {
            "options": [
            "Isobar",
            "Isohel",
            "Isotherm",
            "Isohume"
            ],
            "question": "What line connects the points on a map that have the same temprature ? ",
            "answer": 2
        }, {
            "options": [
            "Ganga",
            "Brahmaputra",
            "Mahanadi",
            "Godavari"
            ],
            "question": "In which river is India's largest riverine island Majuli is situated ? ",
            "answer": 1
        }, {
            "options": [
            "Veerta Aur Vivek",
            "Bharat Mata Ki Jai",
            "Vayam Rakshaamah",
            "Ekta Aur Anushasan"
            ],
            "question": "What is the motto of the National Cadet Corps (NCC) ? ",
            "answer": 3
        }, {
            "options": [
            "BSE",
            "NSE",
            "NYSE",
            "NASDAQ"
            ],
            "question": "Nifty is the main share index of which stock exchange ? ",
            "answer": 1
        }, {
            "options": [
            "Venus",
            "Mercury",
            "Earth",
            "Mars"
            ],
            "question": "Which planet is nearest to Sun ? ",
            "answer": 1
        }, {
            "options": [
            "Draupadi",
            "Ulupi",
            "Chitrangada",
            "Subhadra"
            ],
            "question": "According to Mahabahrat, who was Abhimanyu's mother ? ",
            "answer": 3
        }, {
            "options": [
            "Radcliffe Line",
            "McMahon Line",
            "Durand Line",
            "Curzon Line"
            ],
            "question": "What is the boundary line demarcating India and Pakistan known as ? ",
            "answer": 0
        }, {
            "options": [
            "Odissi",
            "Kuchipudi",
            "Kathak",
            "Bharatanatyam"
            ],
            "question": "The name of which Indian classical dance style, originated in north India, literally means 'Story Teller' ? ",
            "answer": 2
        }, {
            "options": [
            "Akbar",
            "Jahangir",
            "Shahjahan",
            "Aurangzeb"
            ],
            "question": "Jama Masjid at Delhi, the largest in India, was built by which Mughal emperor ? ",
            "answer": 2
        }, {
            "options": [
            "Lata Mangeshkar",
            "Pt. Bhimsen Joshi",
            "Gangubai Hangal",
            "Pt. Ravi Shankar"
            ],
            "question": "Which renowned vocalist was awarded Bharat Ratna in 2008 ? ",
            "answer": 1
        }, {
            "options": [
            "Iceland",
            "France",
            "Japan",
            "Israel"
            ],
            "question": "The Althing, the oldest functioning legislative assembly in world, is the parliament of which country ? ",
            "answer": 0
        }, {
            "options": [
            "Kelvin",
            "Richter",
            "Mohs",
            "Mercalli"
            ],
            "question": "To measure hardness of minerals, which scale is used ? ",
            "answer": 2
        }, {
            "options": [
            "Phantom",
            "Batman",
            "Superman",
            "Spiderman"
            ],
            "question": "Peter Parker is the original name of which fictional superhero ? ",
            "answer": 3
        }, {
            "options": [
            "Mars",
            "Venus",
            "Jupiter",
            "Mercury"
            ],
            "question": "Which planet is referred Morning Star as well as Evening Star ? ",
            "answer": 1
        }, {
            "options": [
            "Bhutan",
            "Nepal",
            "India",
            "Bangladesh"
            ],
            "question": "Lumbini, the birth place of Gautam Budhdha, is in which present country ? ",
            "answer": 1
        }, {
            "options": [
            "Bachendri Pal",
            "Santosh Yadav",
            "Kalpana Chawla",
            "Kiran Bedi"
            ],
            "question": "Who was the first indian woman to scale the Mount Everest ? ",
            "answer": 0
        }, {
            "options": [
            "President",
            "Lok Sabha",
            "Rajya Sabha",
            "Supreme Court"
            ],
            "question": "Which is not a part of our parliament ? ",
            "answer": 3
        }, {
            "options": [
            "Water",
            "Height",
            "Darkness",
            "Thunder"
            ],
            "question": "What is aquaphobia, also referred as hydrophobia, the fear of ? ",
            "answer": 0
        }, {
            "options": [
            "Mahatma Gandhi",
            "Bal Gangadhr Tilak",
            "Rabindra Nath Tagore",
            "Jawaharlal Nehru"
            ],
            "question": "Which freedom fighter authored the book Discovery of India ? ",
            "answer": 3
        }, {
            "options": [
            "Babur",
            "Akbar",
            "Jahangir",
            "Shahjahan"
            ],
            "question": "To commemorate his conquest of the Ranthambhor fort and Khandesh in Gujarat, which Mughal ruler built Buland Darwaza at Fatehpur Sikri ? ",
            "answer": 1
        }, {
            "options": [
            "Galena",
            "Bauxite",
            "Cinnabar",
            "Hematite"
            ],
            "question": "Which is the principal ore of Mercury ? ",
            "answer": 2
        }, {
            "options": [
            "New Delhi",
            "Ahmedabad",
            "Bengaluru",
            "Bhubaneshwar"
            ],
            "question": "Where is the Indian Institute of Science (IISc) situated ? ",
            "answer": 2
        }, {
            "options": [
            "Dog",
            "Cat",
            "Cow",
            "Horse"
            ],
            "question": "German Shepherd is a popular breed of ? ",
            "answer": 0
        }, {
            "options": [
            "Govinda",
            "Jitendra",
            "Sunil Dutt",
            "Akshay Kumar"
            ],
            "question": "How do we better know film actor Rajeev Bhatia ? ",
            "answer": 3
        }, {
            "options": [
            "Sita",
            "Urmila",
            "Mandavi",
            "Shruthukeerti"
            ],
            "question": "According to Ramayana, who was Bharat's wife ? ",
            "answer": 2
        }, {
            "options": [
            "Red Sea",
            "Arabian Sea",
            "Bay of Bengal",
            "Indian Ocean"
            ],
            "question": "Into which water body does river Narmada flow ? ",
            "answer": 1
        }, {
            "options": [
            "Birbal",
            "Abul Fazal",
            "Raja Todar Mal",
            "Raja Man Singh"
            ],
            "question": "Who was Akbar's financial advisor ? ",
            "answer": 2
        }, {
            "options": [
            "Mussoorie",
            "Dehradun",
            "Chandigarh",
            "Hyderabad"
            ],
            "question": "Where is Sardar Vallabhbhai Patel Police Academy situated ? ",
            "answer": 3
        }, {
            "options": [
            "A.O.Hume",
            "Subhash Chand Bose",
            "Motilal Nehru",
            "Shyama Prasad Mukherjee"
            ],
            "question": "Who founded Forward Block political party ? ",
            "answer": 1
        }, {
            "options": [
            "Wasim Akram",
            "Shane Warne",
            "Muttiah Muralitharan",
            "Glenn McGrath"
            ],
            "question": "Who is the only cricketer to claim over 500 wickets in both Tests and One Day Internationals ? ",
            "answer": 2
        }, {
            "options": [
            "Sabeer Bhatia",
            "Vinod Dham",
            "Azim Premji",
            "N.R.Narayan Murthy"
            ],
            "question": "Which indian IT expert started web-based e-mail service Hotmail in 1996 ? ",
            "answer": 0
        }, {
            "options": [
            "Edwin Lutyens",
            "Le Corbusier",
            "Charles Correa",
            "Herbert Baker"
            ],
            "question": "Which architect designed the city of Chandigarh ? ",
            "answer": 1
        }, {
            "options": [
            "Red",
            "Yellow",
            "Green",
            "Violet"
            ],
            "question": "Which colour is in the centre of Rainbow ? ",
            "answer": 2
        }, {
            "options": [
            "Goa",
            "Sikkim",
            "Nagaland",
            "Tripura"
            ],
            "question": "In terms of area, which is the smallest state in India ? ",
            "answer": 0
        }, {
            "options": [
            "President",
            "Prime Minister",
            "Vice President",
            "Finance Minister"
            ],
            "question": "Who is the chairman of the Planning Commission ? ",
            "answer": 1
        }, {
            "options": [
            "Ved Vyas",
            "Valmiki",
            "Surdas",
            "Tulsidas"
            ],
            "question": "Who authored sanskrit epic Ramayana ? ",
            "answer": 1
        }, {
            "options": [
            "P.T.Usha",
            "Shiny Abraham",
            "Karnam Malleshwari",
            "Kunjarani Devi"
            ],
            "question": "Who is the first indian woman to win Olympic medal ? ",
            "answer": 2
        }, {
            "options": [
            "Erie Canal",
            "Indira Gandhi Canal",
            "Panama Canal",
            "Suez Canal"
            ],
            "question": "Which canal connects Mediterranean Sea with Red Sea ? ",
            "answer": 3
        }, {
            "options": [
            "Ashwatthama",
            "Dronacharya",
            "Karna",
            "Shalya"
            ],
            "question": "According to Mahabharat, who was the last Commander-in-Chief of Kaurava army ? ",
            "answer": 0
        }, {
            "options": [
            "Chetan Sharma",
            "Kapil Dev",
            "Harbhajan Singh",
            "Irfan Pathan"
            ],
            "question": "Who is the first indian cricketer to take Hat Trick in Test Cricket ? ",
            "answer": 2
        }, {
            "options": [
            "Femur",
            "Fibula",
            "Radius",
            "Stapes"
            ],
            "question": "Which is the longest bone in human body ? ",
            "answer": 0
        }, {
            "options": [
            "Palace on Wheels",
            "Heritage on Wheels",
            "The Deccan Odyssey",
            "Golden Chariot"
            ],
            "question": "Which luxury train travels through Maharashtra and includes Goa in its journey ? ",
            "answer": 2
        }, {
            "options": [
            "7",
            "10",
            "12",
            "15"
            ],
            "question": "For Rajya Sabha, how many members are nominated by President? ",
            "answer": 2
        }, {
            "options": [
            "Ashok",
            "Harshvardhan",
            "Chandragupta Maurya",
            "Kanishka"
            ],
            "question": "Chankya was the chief advisor of which ruler ? ",
            "answer": 2
        }, {
            "options": [
            "East to West",
            "West to East",
            "North to South",
            "South to North"
            ],
            "question": "What is the direction of rotation of earth on its axis ? ",
            "answer": 1
        }, {
            "options": [
            "4",
            "8",
            "12",
            "16"
            ],
            "question": "In Computers, One Byte equals to how many Bits ? ",
            "answer": 1
        }, {
            "options": [
            "Padam Shri",
            "Padam Bhushan",
            "Padam Vibhushan",
            "Bharat Ratna"
            ],
            "question": "Which is the highest civilian award in India ? ",
            "answer": 3
        }, {
            "options": [
            "Ibrahim Lodhi",
            "Sikandar Lodhi",
            "Bahlul Lodhi",
            "Daulat Lodhi"
            ],
            "question": "In first battle of Panipat, Babar defeated which Lodhi ruler to establish Mughals in India ? ",
            "answer": 0
        }, {
            "options": [
            "Giraffe",
            "Elephant",
            "Orang Utan",
            "Blue Whale"
            ],
            "question": "Which is the largest animal in world ? ",
            "answer": 3
        }, {
            "options": [
            "Two",
            "All",
            "None",
            "Not fixed"
            ],
            "question": "In an equilateral triange, how many sides are equal ? ",
            "answer": 1
        }, {
            "options": [
            "Tejas",
            "Anupam",
            "Aryabhatt",
            "Param"
            ],
            "question": "What is the name of first indigenously developed Super Computer of India ? ",
            "answer": 3
        }, {
            "options": [
            "Prakash Amritraj",
            "Rohan Bopanna",
            "Yuki Bhambri",
            "Zeeshan Ali"
            ],
            "question": "Who is the first indian Tenis player to win boy's Australian Open Junior Title ? ",
            "answer": 2
        }
    ]


    function getRandoms(numPicks, low, high) {
        var len = high - low + 1;
        var nums = new Array(len);
        var selections = [], i;
        // initialize the array
        for (i = 0; i < len; i++) {
            nums[i] = i + low;
        }
        
        // randomly pick one from the array
        for (var i = 0; i < numPicks; i++) {
            var index = Math.floor(Math.random() * nums.length);
            selections.push(nums[index]);
            nums.splice(index, 1);
        }
        return(selections);
    }



    return {
        
        getCollection: function(size) {
            var arr = getRandoms(size, 1, data.length);
            var results = [];


            for (var i = 0; i < arr.length; i++) {

                results.push(data[arr[i]]);
            }
            
            return results
        },

        getOne: function(id) {
            return data[id];
        }

    };
}])
