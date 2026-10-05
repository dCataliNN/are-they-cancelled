// The case files. Each entry summarizes widely reported, public facts.
// verdict: "cancelled" | "thin-ice" | "complicated" | "clear"
// Keep summaries factual: say "accused", "denies", "convicted", "acquitted" precisely.
// Add a person by copying an entry. `aliases` help the search match nicknames.

window.CASE_FILES = [
  // ---------- Cancelled ----------
  {
    name: "R. Kelly", aliases: ["r kelly", "robert kelly"], known: "Singer, songwriter",
    alive: true, verdict: "cancelled",
    record: "Convicted in federal court in New York (2021) of racketeering and sex trafficking, and in Chicago (2022) of child pornography and enticement of minors. Serving a 30-year sentence.",
    wiki: "R._Kelly"
  },
  {
    name: "Phil Spector", aliases: ["spector"], known: "Record producer",
    alive: false, verdict: "cancelled",
    record: "Convicted in 2009 of the second-degree murder of actress Lana Clarkson. Died in prison in 2021.",
    wiki: "Phil_Spector"
  },
  {
    name: "Danny Masterson", aliases: ["masterson"], known: "Actor (That '70s Show)",
    alive: true, verdict: "cancelled",
    record: "Convicted in 2023 of two counts of rape and sentenced to 30 years to life. He maintains his innocence and has appealed.",
    wiki: "Danny_Masterson"
  },
  {
    name: "Harvey Weinstein", aliases: ["weinstein"], known: "Film producer",
    alive: true, verdict: "cancelled",
    record: "Accused by dozens of women starting in 2017. Convicted of rape in Los Angeles (2022). His 2020 New York conviction was overturned in 2024; at the 2025 retrial he was convicted on one count and acquitted on another. The last remaining New York rape charge was dropped in 2026 after juries deadlocked twice.",
    wiki: "Harvey_Weinstein"
  },
  {
    name: "Roman Polanski", aliases: ["polanski"], known: "Film director",
    alive: true, verdict: "cancelled",
    record: "Pleaded guilty in 1977 to unlawful sex with a 13-year-old and fled the US before sentencing. Expelled from the Academy in 2018. Other women have since accused him; he denies those claims.",
    wiki: "Roman_Polanski"
  },
  {
    name: "Kanye West", aliases: ["ye", "kanye", "west"], known: "Rapper, designer",
    alive: true, verdict: "cancelled",
    record: "Made repeated antisemitic statements beginning in 2022, including praising Hitler. Adidas, Balenciaga, Gap and his talent agency cut ties. He has alternated between apologizing and repeating the statements. After he took out a full-page apology in January 2026, the UK still barred him from entering the country, and the Wireless festival he was headlining was cancelled.",
    wiki: "Kanye_West"
  },

  // ---------- On thin ice ----------
  {
    name: "Woody Allen", aliases: ["allen", "woody"], known: "Film director",
    alive: true, verdict: "thin-ice",
    record: "Accused in 1992 by his adopted daughter Dylan Farrow of sexually abusing her as a child. He was never charged and denies it. Investigations at the time reached conflicting conclusions. Several actors have publicly said they regret working with him. Dederer opens her book with him.",
    wiki: "Woody_Allen"
  },
  {
    name: "Louis C.K.", aliases: ["louis ck", "louis c k", "louie"], known: "Comedian",
    alive: true, verdict: "thin-ice",
    record: "Admitted in 2017 that accounts by five women of sexual misconduct were true. His film was shelved and FX cut ties. He returned to touring and won a Grammy in 2022.",
    wiki: "Louis_C.K."
  },
  {
    name: "Bill Cosby", aliases: ["cosby"], known: "Comedian, actor",
    alive: true, verdict: "thin-ice",
    record: "Accused of sexual assault by dozens of women. Convicted in 2018, but the conviction was overturned in 2021 on due-process grounds, not on the facts. A 2022 civil jury found he sexually abused a 16-year-old in 1975. He denies the allegations.",
    wiki: "Bill_Cosby"
  },
  {
    name: "Chris Brown", aliases: ["breezy"], known: "Singer",
    alive: true, verdict: "thin-ice",
    record: "Pleaded guilty in 2009 to felony assault of Rihanna. Has faced other assault allegations since, including UK charges over a 2023 London nightclub bottle attack. He pleaded not guilty, and the trial was set to start on October 26, 2026. His albums and tours still sell very well.",
    wiki: "Chris_Brown"
  },
  {
    name: "Sean Combs", aliases: ["diddy", "puff daddy", "p diddy", "puffy", "combs"], known: "Rapper, mogul",
    alive: true, verdict: "thin-ice",
    record: "Arrested in 2024 on federal sex-trafficking and racketeering charges. In 2025 a jury acquitted him of those charges and convicted him on two prostitution-related transportation counts. He was sentenced to 50 months and is appealing. His release date is February 2028. He still faces many civil lawsuits, which he denies.",
    wiki: "Sean_Combs"
  },
  {
    name: "Marilyn Manson", aliases: ["manson", "brian warner"], known: "Musician",
    alive: true, verdict: "thin-ice",
    record: "Accused of abuse by several former partners, including Evan Rachel Wood, in 2021. He denies the allegations. In 2025 the Los Angeles DA declined to file charges, citing the statute of limitations and insufficient evidence.",
    wiki: "Marilyn_Manson"
  },
  {
    name: "Neil Gaiman", aliases: ["gaiman"], known: "Author",
    alive: true, verdict: "thin-ice",
    record: "Accused of sexual assault and coercion by several women in 2024 and 2025. He denies all non-consensual conduct. In 2026, US judges dismissed his former nanny's lawsuits on the grounds that they belong in New Zealand courts, without ruling on the claims themselves. Some publishers and productions have paused or dropped projects with him.",
    wiki: "Neil_Gaiman"
  },
  {
    name: "Mel Gibson", aliases: ["gibson"], known: "Actor, director",
    alive: true, verdict: "thin-ice",
    record: "Made antisemitic remarks during a 2006 DUI arrest. In 2010, recordings of him threatening his ex-partner were leaked, and in 2011 he pleaded no contest to misdemeanor battery. Hollywood took him back with Hacksaw Ridge (2016).",
    wiki: "Mel_Gibson"
  },
  {
    name: "Pablo Picasso", aliases: ["picasso"], known: "Painter",
    alive: false, verdict: "thin-ice",
    record: "Biographers and former partners, including Françoise Gilot, describe him as cruel and controlling toward the women in his life. Dederer's book returns to him often. Museums now show his work alongside this history.",
    wiki: "Pablo_Picasso"
  },
  {
    name: "Richard Wagner", aliases: ["wagner"], known: "Composer",
    alive: false, verdict: "thin-ice",
    record: "Wrote the antisemitic essay 'Judaism in Music' (1850). His music was later embraced by the Nazis. Israel still has an informal ban on performing it.",
    wiki: "Richard_Wagner"
  },
  {
    name: "Roald Dahl", aliases: ["dahl"], known: "Children's author",
    alive: false, verdict: "thin-ice",
    record: "Made openly antisemitic remarks in interviews. His family publicly apologized for them in 2020.",
    wiki: "Roald_Dahl"
  },
  {
    name: "Morrissey", aliases: ["moz", "steven morrissey", "the smiths"], known: "Singer (The Smiths)",
    alive: true, verdict: "thin-ice",
    record: "Has publicly supported the far-right party For Britain and made a long series of remarks widely criticized as racist. He rejects that label.",
    wiki: "Morrissey"
  },

  // ---------- It's complicated ----------
  {
    name: "Michael Jackson", aliases: ["mj", "jackson", "king of pop"], known: "Singer",
    alive: false, verdict: "complicated",
    record: "Accused of child sexual abuse in 1993 (settled out of court) and acquitted of all charges at trial in 2005. The 2019 documentary Leaving Neverland revived the allegations, which his estate denies. His catalog remains hugely popular.",
    wiki: "Michael_Jackson"
  },
  {
    name: "J.K. Rowling", aliases: ["jk rowling", "j k rowling", "rowling", "harry potter"], known: "Author",
    alive: true, verdict: "complicated",
    record: "Has made many public statements on gender identity that critics call transphobic. She says she supports trans people but defends sex-based rights. She has not been accused of any crime. Some fans have stopped buying Harry Potter products, and she funds groups campaigning on the issue.",
    wiki: "J._K._Rowling"
  },
  {
    name: "Johnny Depp", aliases: ["depp"], known: "Actor",
    alive: true, verdict: "complicated",
    record: "In 2020 a UK court ruled against him in a libel case, finding allegations that he abused Amber Heard 'substantially true.' In 2022 a US jury found Heard had defamed him and also found in part for her counterclaim. Two courts reached opposite outcomes.",
    wiki: "Johnny_Depp"
  },
  {
    name: "Kevin Spacey", aliases: ["spacey"], known: "Actor",
    alive: true, verdict: "complicated",
    record: "Accused of sexual misconduct by numerous men beginning in 2017. A US civil jury found him not liable in 2022, and a UK criminal jury acquitted him on all counts in 2023. In 2026 he settled UK civil suits from three men, without admitting liability. He has largely been out of mainstream work since.",
    wiki: "Kevin_Spacey"
  },
  {
    name: "Ernest Hemingway", aliases: ["hemingway"], known: "Author",
    alive: false, verdict: "complicated",
    record: "Biographers note his bigotry and cruelty to his wives, and his books contain racist and antisemitic passages. He is studied today alongside that history rather than despite it.",
    wiki: "Ernest_Hemingway"
  },
  {
    name: "Dave Chappelle", aliases: ["chappelle"], known: "Comedian",
    alive: true, verdict: "complicated",
    record: "His specials, especially The Closer (2021), drew protests over jokes about trans people, including a walkout by Netflix employees. Netflix kept the specials up, and he continues to sell out shows.",
    wiki: "Dave_Chappelle"
  },
  {
    name: "Ellen DeGeneres", aliases: ["ellen", "degeneres"], known: "TV host",
    alive: true, verdict: "complicated",
    record: "Former staff described a toxic workplace on her show in 2020, and three senior producers were let go after an internal investigation. She apologized, and the show ended in 2022.",
    wiki: "Ellen_DeGeneres"
  },
  {
    name: "Gina Carano", aliases: ["carano"], known: "Actor, MMA fighter",
    alive: true, verdict: "complicated",
    record: "Lucasfilm dropped her from The Mandalorian in 2021 over social media posts, including one comparing being a Republican to being Jewish in Nazi Germany. She sued Disney, and the case settled in 2025.",
    wiki: "Gina_Carano"
  },
  {
    name: "Armie Hammer", aliases: ["hammer"], known: "Actor",
    alive: true, verdict: "complicated",
    record: "Former partners accused him of abuse in 2021, and an LAPD investigation followed. In 2023 the LA DA declined to charge him, citing insufficient evidence. He denies the allegations and has begun a small comeback.",
    wiki: "Armie_Hammer"
  },

  // ---------- In the clear ----------
  {
    name: "Dolly Parton", aliases: ["dolly", "parton"], known: "Singer, songwriter",
    alive: true, verdict: "clear",
    record: "No significant scandal on record. Known for philanthropy, including the Imagination Library and funding toward the Moderna COVID-19 vaccine.",
    wiki: "Dolly_Parton"
  },
  {
    name: "Keanu Reeves", aliases: ["keanu", "reeves"], known: "Actor",
    alive: true, verdict: "clear",
    record: "No significant scandal on record. He is widely reported to be generous with crews and charities.",
    wiki: "Keanu_Reeves"
  },
  {
    name: "Tom Hanks", aliases: ["hanks"], known: "Actor",
    alive: true, verdict: "clear",
    record: "No significant scandal on record.",
    wiki: "Tom_Hanks"
  },
  {
    name: "Taylor Swift", aliases: ["taylor", "swift", "tswift"], known: "Singer, songwriter",
    alive: true, verdict: "clear",
    record: "No serious misconduct on record. Her criticism has mostly been about private-jet emissions and celebrity feuds, which are not the kind of conduct Dederer is writing about.",
    wiki: "Taylor_Swift"
  }
];

// ---------- Compact entries ----------
// add(name, known, verdict, record, { dead, aka })
// Entries with no record fall back to a "nothing serious in our files" line.
(() => {
  const CF = window.CASE_FILES;
  const add = (name, known, verdict, record, o = {}) =>
    CF.push({ name, known, verdict, record, alive: !o.dead, aliases: o.aka || [] });
  const D = { dead: true };

  // ---- Cancelled ----
  add("Gary Glitter", "Glam rock singer", "cancelled", "Convicted of possessing child abuse images (1999), of obscene acts with children in Vietnam (2006), and of attempted rape and sexual offences against girls in the UK (2015). Sentenced to 16 years.", { aka: ["paul gadd"] });
  add("Rolf Harris", "TV entertainer, artist", "cancelled", "Convicted in 2014 of 12 counts of indecent assault against girls. Died in 2023.", D);
  add("Jimmy Savile", "TV and radio presenter", "cancelled", "After his death in 2011, police found he had sexually abused hundreds of people, many of them children, over decades.", D);
  add("Ian Watkins", "Singer (Lostprophets)", "cancelled", "Convicted in 2013 of child sex offences, including attempted rape of a baby, and sentenced to 29 years. Died in prison in 2025 after an attack by other inmates.", D);
  add("Tekashi 6ix9ine", "Rapper", "cancelled", "Pleaded guilty in 2015 to use of a child in a sexual performance. In 2019 pleaded guilty to racketeering charges and testified against former gang associates.", { aka: ["6ix9ine", "tekashi69", "daniel hernandez"] });
  add("Tory Lanez", "Rapper, singer", "cancelled", "Convicted in 2022 of shooting Megan Thee Stallion in the feet and sentenced to 10 years in prison.");
  add("Jonathan Majors", "Actor", "cancelled", "Convicted in 2023 of assault and harassment of his former girlfriend. Marvel dropped him right away.");
  add("Gérard Depardieu", "Actor", "cancelled", "Accused of sexual misconduct by many women. Convicted in Paris in 2025 of sexually assaulting two women on a film set and given a suspended sentence. He is appealing that conviction, and has also appealed an order sending him to trial for rape in a separate case.");
  add("James Levine", "Conductor", "cancelled", "Fired by the Metropolitan Opera in 2018 after an investigation found evidence of sexual abuse and harassment. Died in 2021.", D);
  add("O.J. Simpson", "Football player, actor", "cancelled", "Acquitted in 1995 of murdering Nicole Brown Simpson and Ron Goldman, but a civil jury found him liable in 1997. Convicted of armed robbery in 2008. Died in 2024.", { dead: true, aka: ["oj simpson", "oj"] });
  add("Lance Armstrong", "Cyclist", "cancelled", "Stripped of his seven Tour de France titles in 2012 and banned for life. Admitted to doping in 2013.");
  add("Ray Rice", "Football player", "cancelled", "Video showed him knocking his then-fiancée unconscious in a casino elevator in 2014. He was released by his team and never played in the NFL again.");
  add("Oscar Pistorius", "Paralympic sprinter", "cancelled", "Shot and killed his girlfriend Reeva Steenkamp in 2013 and was convicted of murder. Released on parole in 2024.");
  add("Roseanne Barr", "Comedian, actor", "cancelled", "ABC cancelled her hit sitcom reboot in 2018 after she posted a racist tweet about Valerie Jarrett.", { aka: ["roseanne"] });
  add("Matt Lauer", "TV host", "cancelled", "Fired by NBC in 2017 over sexual misconduct. A former colleague later accused him of rape. He says the encounter was consensual.");
  add("Charlie Rose", "TV host", "cancelled", "Fired by CBS and PBS in 2017 after several women accused him of sexual harassment.");
  add("Eric Gill", "Sculptor, typeface designer", "cancelled", "His own diaries, published after his death, show he sexually abused his daughters. His sculptures still stand on the BBC's Broadcasting House.", D);
  add("Marion Zimmer Bradley", "Fantasy author", "cancelled", "In 2014 her daughter said Bradley sexually abused her as a child. Bradley had also covered for her husband, a convicted child molester. Died in 1999.", D);
  add("Andrew Mountbatten Windsor", "Former British prince", "cancelled", "Virginia Giuffre accused him of sexually abusing her when she was 17, after she was trafficked by Jeffrey Epstein. He denied it but settled her lawsuit in 2022. King Charles stripped him of the title of Prince and the title of Duke of York in 2025.", { aka: ["prince andrew", "duke of york"] });

  // ---- On thin ice ----
  add("Ezra Miller", "Actor", "thin-ice", "Arrested twice in Hawaii in 2022, and pleaded guilty in Vermont in 2023 to unlawful trespass after a burglary charge was dropped. Miller apologized and sought mental-health treatment.");
  add("Shia LaBeouf", "Actor", "thin-ice", "FKA twigs sued him in 2020 for sexual battery and abuse, and the case settled in 2025. He has publicly acknowledged a history of abusive behavior. Has several earlier arrests.");
  add("Russell Brand", "Comedian, presenter", "thin-ice", "Accused by several women in a 2023 media investigation. Charged in the UK in 2025 with rape and sexual assault. He pleaded not guilty. His trial was pushed back to October 2026, so check the news for the outcome.");
  add("Andrew Tate", "Influencer, ex-kickboxer", "thin-ice", "UK prosecutors have charged him with rape and human trafficking, and in 2026 he was jailed in Miami while fighting extradition to the UK. Romania indicted him in 2026 on charges including trafficking minors. He denies all of the charges.");
  add("Jared Leto", "Actor, musician", "thin-ice", "In 2025, nine women told Air Mail he behaved sexually inappropriately toward them, and some were minors at the time. His representatives deny all of the allegations.");
  add("Bryan Singer", "Film director", "thin-ice", "Accused by several men of sexually abusing them as teenagers. He denies it, but settled one lawsuit in 2019. He was fired during production of Bohemian Rhapsody.");
  add("Brett Ratner", "Film director", "thin-ice", "Accused of sexual misconduct by several women in 2017. He denies it. Returned to directing in 2025.");
  add("Joss Whedon", "Writer, director", "thin-ice", "Several actors, including Ray Fisher and Charisma Carpenter, accused him of abusive behavior on set. He disputes most of their accounts.");
  add("Scott Rudin", "Film and theater producer", "thin-ice", "Stepped back from his productions in 2021 after reports of years of abusive behavior toward staff. He apologized.");
  add("Chris Noth", "Actor", "thin-ice", "Accused of sexual assault by several women in 2021. He denies it. He was cut from And Just Like That and dropped by his agency.");
  add("Cuba Gooding Jr.", "Actor", "thin-ice", "Pleaded guilty in 2022 to a forcible touching charge after multiple women accused him of groping.");
  add("Mario Batali", "Celebrity chef", "thin-ice", "Accused of sexual misconduct by several women in 2017 and left his restaurants. Acquitted of indecent assault in 2022.");
  add("Paula Deen", "Celebrity chef", "thin-ice", "Admitted in a 2013 deposition to having used a racial slur. Food Network didn't renew her show and sponsors dropped her.");
  add("Michael Richards", "Actor (Seinfeld)", "thin-ice", "Went on a racist tirade during a 2006 stand-up set. He apologized, and his career largely ended.", { aka: ["kramer"] });
  add("Charlie Sheen", "Actor", "thin-ice", "Pleaded guilty in 2010 to misdemeanor assault of his then-wife, and has faced other domestic violence accusations.");
  add("Nick Carter", "Singer (Backstreet Boys)", "thin-ice", "Several women have accused him of rape. He denies it and has countersued.");
  add("Steven Seagal", "Actor", "thin-ice", "Accused of sexual misconduct by several women, which he denies. He took Russian citizenship and is an outspoken supporter of Vladimir Putin.");
  add("Plácido Domingo", "Opera singer", "thin-ice", "Accused of sexual harassment by many women in 2019. A union investigation found inappropriate conduct, and he apologized. Most US opera houses dropped him.", { aka: ["placido domingo"] });
  add("Mike Tyson", "Boxer", "thin-ice", "Convicted of rape in 1992 and served three years in prison. Remains a popular public figure.");
  add("Deshaun Watson", "Football player", "thin-ice", "More than 20 massage therapists accused him of sexual misconduct. Two grand juries declined to indict him, but the NFL suspended him for 11 games in 2022. He settled most of the lawsuits.");
  add("Floyd Mayweather", "Boxer", "thin-ice", "Convicted several times of domestic violence. Served about two months in jail in 2012.");
  add("Brett Favre", "Football player", "thin-ice", "Received payments from a Mississippi welfare fund for speeches he didn't give. He repaid the money and has not been criminally charged.");
  add("Will Smith", "Actor, rapper", "thin-ice", "Slapped Chris Rock on stage at the 2022 Oscars. He resigned from the Academy, which banned him for 10 years. He apologized.");
  add("Bill O'Reilly", "TV host", "thin-ice", "Pushed out of Fox News in 2017 after reports that he and the network had paid millions to settle harassment claims.");
  add("Garrison Keillor", "Radio host, author", "thin-ice", "Minnesota Public Radio cut ties with him in 2017 over allegations of inappropriate behavior, which he disputes.");
  add("James Franco", "Actor", "thin-ice", "Former acting students sued him for sexual exploitation, and the case settled in 2021. He later admitted sleeping with students.");
  add("Jeffrey Tambor", "Actor", "thin-ice", "Fired from Transparent in 2018 after two women accused him of harassment. He denies it.");
  add("DaBaby", "Rapper", "thin-ice", "Made homophobic remarks and spread misinformation about HIV on stage in 2021. Several festivals dropped him.");
  add("Young Thug", "Rapper", "thin-ice", "Pleaded guilty in 2024 to gang, drug and gun charges in Georgia's YSL case. Sentenced to time served plus 15 years' probation.");
  add("Morgan Wallen", "Country singer", "thin-ice", "Caught on video using a racial slur in 2021. Pleaded guilty in 2024 to reckless endangerment after throwing a chair off a Nashville bar roof. Still one of the biggest artists in the world.");
  add("Smokey Robinson", "Singer, songwriter", "thin-ice", "Former housekeepers sued him in 2025, alleging sexual assault. He denies it. His $500 million defamation countersuit was thrown out, and in 2026 a judge let parts of their case go forward.");
  add("Ryan Adams", "Singer, songwriter", "thin-ice", "Several women accused him of emotional abuse and manipulation in 2019. He later apologized.");
  add("Win Butler", "Singer (Arcade Fire)", "thin-ice", "Accused of sexual misconduct by several people in 2022. He says the relationships were consensual.");
  add("XXXTentacion", "Rapper", "thin-ice", "Charged with violently abusing his pregnant girlfriend, but was shot and killed in 2018 before his trial.", { dead: true, aka: ["x", "jahseh onfroy"] });
  add("Ike Turner", "Musician", "thin-ice", "Tina Turner described years of brutal abuse by him in her memoir and in the film What's Love Got to Do with It. Died in 2007.", D);
  add("James Brown", "Singer", "thin-ice", "Arrested several times for domestic violence, and served time in prison after a 1988 police car chase. Died in 2006.", D);
  add("Jerry Lee Lewis", "Rock 'n' roll singer", "thin-ice", "Married his 13-year-old cousin in 1957, which derailed his career. Died in 2022.", D);
  add("Steven Tyler", "Singer (Aerosmith)", "thin-ice", "Sued by women who say he sexually assaulted them in the 1970s, one of them when she was a teenager. He denies it.");
  add("Eric Clapton", "Guitarist", "thin-ice", "Made a racist onstage rant in support of Enoch Powell in 1976. More recently he spread COVID-19 vaccine misinformation.");
  add("Miles Davis", "Jazz trumpeter", "thin-ice", "Admitted in his autobiography to hitting the women in his life, including his wife Frances Taylor. Died in 1991.", D);
  add("Norman Mailer", "Author", "thin-ice", "Stabbed his wife Adele in 1960 and pleaded guilty to assault. Died in 2007.", D);
  add("Louis-Ferdinand Céline", "Author", "thin-ice", "Wrote virulently antisemitic pamphlets and collaborated with the Nazi occupation of France. Died in 1961.", { dead: true, aka: ["celine"] });
  add("Ezra Pound", "Poet", "thin-ice", "Made fascist and antisemitic radio broadcasts for Mussolini during WWII. Charged with treason, then held in a psychiatric hospital for 12 years. Died in 1972.", D);
  add("Coco Chanel", "Fashion designer", "thin-ice", "Declassified records show she was registered as a German intelligence agent during WWII. She lived with a Nazi officer during the occupation. Died in 1971.", D);
  add("Paul Gauguin", "Painter", "thin-ice", "Took girls as young as 13 as 'wives' in Tahiti and is believed to have infected them with syphilis. Died in 1903.", { dead: true, aka: ["gauguin"] });
  add("Bernardo Bertolucci", "Film director", "thin-ice", "Admitted that Maria Schneider wasn't told about the sexual assault scene in Last Tango in Paris in advance. Died in 2018.", D);
  add("Lars von Trier", "Film director", "thin-ice", "Banned from Cannes in 2011 after saying he 'understood' Hitler. In 2017 Björk accused him of sexual harassment, which he denies.");
  add("Chuck Close", "Painter", "thin-ice", "Several women who posed for him accused him of sexual harassment in 2017, and the National Gallery cancelled his show. Died in 2021.", D);
  add("Sherman Alexie", "Author", "thin-ice", "Accused of sexual harassment by multiple women in 2018. He apologized and gave back a literary award.");
  add("Alice Munro", "Short-story writer", "thin-ice", "In 2024, after Munro's death, her daughter revealed that Munro's husband had sexually abused her as a child. He pleaded guilty in 2005, and Munro stayed with him.", D);

  // ---- It's complicated ----
  add("Amber Heard", "Actor", "complicated", "A UK court found her abuse allegations against Johnny Depp 'substantially true', and a US jury found she had defamed him. Two courts reached opposite outcomes.");
  add("Brad Pitt", "Actor", "complicated", "Angelina Jolie accused him of abusing her and their children on a 2016 flight. The FBI declined to bring charges, and he denies her allegations.");
  add("Justin Baldoni", "Actor, director", "complicated", "Blake Lively sued him in 2024, alleging sexual harassment and a smear campaign, which he denied. His $400 million countersuit was dismissed in 2025. In 2026 a judge threw out her harassment claims, and the rest of the case settled before trial.");
  add("Jay-Z", "Rapper, mogul", "complicated", "Named in a 2024 lawsuit alleging that he and Sean Combs raped a 13-year-old in 2000. He denies it, and the plaintiff dropped the case in 2025.", { aka: ["jay z", "shawn carter", "hov"] });
  add("Travis Scott", "Rapper", "complicated", "Ten people died in a crowd crush at his Astroworld festival in 2021. A grand jury declined to indict him in 2023.");
  add("A$AP Rocky", "Rapper", "complicated", "Acquitted in 2025 of assault with a firearm.", { aka: ["asap rocky", "rocky"] });
  add("Lizzo", "Singer", "complicated", "Former dancers sued her in 2023, alleging sexual harassment and a hostile workplace. She denies it.");
  add("Jason Aldean", "Country singer", "complicated", "The 2023 video for 'Try That in a Small Town' was criticized as racist and was pulled from CMT. He rejects that reading.");
  add("Garth Brooks", "Country singer", "complicated", "A former hairstylist sued him in 2024, alleging sexual assault. He denies it and filed his own suit. The case was still stuck in the courts in 2026.");
  add("John Lennon", "Musician (The Beatles)", "complicated", "Admitted in a 1980 interview that he had hit women. Died in 1980.", { dead: true, aka: ["lennon"] });
  add("Elvis Presley", "Singer", "complicated", "Began dating Priscilla when she was 14 and he was 24. Died in 1977.", { dead: true, aka: ["elvis"] });
  add("Jimmy Page", "Guitarist (Led Zeppelin)", "complicated", "Lori Mattix says she had a relationship with him in the 1970s that began when she was 14. He has never commented.");
  add("Justin Roiland", "Animator (Rick and Morty)", "complicated", "Charged with domestic violence in 2023, but the charges were dropped. Adult Swim cut ties with him after other allegations surfaced.");
  add("Alec Baldwin", "Actor", "complicated", "A prop gun he was holding fired on the set of Rust in 2021, killing cinematographer Halyna Hutchins. The involuntary manslaughter case against him was dismissed in 2024.");
  add("Aziz Ansari", "Comedian", "complicated", "A woman described an uncomfortable sexual encounter with him in a 2018 article. He said he believed it was consensual.");
  add("Ansel Elgort", "Actor", "complicated", "In 2020 a woman said he sexually assaulted her when she was 17. He said the relationship was legal and consensual but apologized for how he behaved.");
  add("Mark Wahlberg", "Actor", "complicated", "Pleaded guilty to assault after attacking two Vietnamese men in 1988, when he was 16. He served 45 days in jail.");
  add("Sean Connery", "Actor", "complicated", "Defended hitting women in interviews in 1965 and 1987. Died in 2020.", D);
  add("Charlie Chaplin", "Actor, director", "complicated", "Married two teenage girls, aged 16 and 17, while in his late 20s and 30s. Died in 1977.", D);
  add("Alfred Hitchcock", "Film director", "complicated", "Tippi Hedren wrote that he sexually harassed and assaulted her. Died in 1980.", { dead: true, aka: ["hitchcock"] });
  add("Quentin Tarantino", "Film director", "complicated", "Pressured Uma Thurman into a dangerous car stunt on Kill Bill that injured her. In 2003 he defended Roman Polanski. He has apologized for both.");
  add("Luc Besson", "Film director", "complicated", "An actress accused him of rape in 2018. The case was dismissed, and France's top court upheld the dismissal in 2023.");
  add("John Lasseter", "Animator (Pixar)", "complicated", "Left Disney/Pixar in 2018 after admitting to 'missteps' including unwanted hugging. Now heads Skydance Animation.");
  add("Dustin Hoffman", "Actor", "complicated", "Accused of sexual harassment by several women, including one who was 17 at the time. He apologized to her.");
  add("Morgan Freeman", "Actor", "complicated", "Eight women told CNN in 2018 that he harassed them or behaved inappropriately. He apologized.");
  add("Jeremy Piven", "Actor", "complicated", "Accused of sexual misconduct by several women in 2017. He denies it.");
  add("Ed Westwick", "Actor", "complicated", "Accused of rape by several women in 2017. Prosecutors declined to file charges in 2018.");
  add("Bill Murray", "Actor", "complicated", "Production on Being Mortal was halted in 2022 after a complaint about his behavior. He said he settled with the woman involved.");
  add("Jimmy Fallon", "Talk show host", "complicated", "Former staff described a toxic workplace on The Tonight Show in 2023. He apologized.");
  add("Joe Rogan", "Podcaster", "complicated", "Accused of spreading COVID-19 misinformation, and a compilation surfaced of him using a racial slur. He apologized for the slur.");
  add("Shane Gillis", "Comedian", "complicated", "Fired from SNL in 2019 over racist and homophobic slurs on his podcast. Returned to host the show in 2024.");
  add("Kevin Hart", "Comedian, actor", "complicated", "Stepped down as Oscars host in 2018 over old homophobic tweets, for which he apologized.");
  add("Logan Paul", "YouTuber, wrestler", "complicated", "Filmed a dead body in Japan's Aokigahara forest for a 2017 video. Buyers of his CryptoZoo project later sued him.");
  add("PewDiePie", "YouTuber", "complicated", "Disney cut ties with him in 2017 over antisemitic jokes, and he used a racial slur on a stream the same year. He apologized.", { aka: ["felix kjellberg"] });
  add("Tiger Woods", "Golfer", "complicated", "His serial infidelity became public in 2009. Pleaded guilty to reckless driving after a 2017 DUI arrest.");
  add("Kobe Bryant", "Basketball player", "complicated", "Charged with sexual assault in 2003. The case was dropped when the accuser wouldn't testify, and he settled her civil suit. Died in 2020.", D);
  add("Cristiano Ronaldo", "Footballer", "complicated", "A woman accused him of rape in 2009. US prosecutors declined to charge him, and her civil suit was dismissed. He denies it.", { aka: ["ronaldo", "cr7"] });
  add("Dani Alves", "Footballer", "complicated", "Convicted of rape in Spain in 2024, but the conviction was overturned on appeal in 2025.");
  add("Pete Rose", "Baseball player", "complicated", "Banned from baseball in 1989 for betting on games. Didn't deny a 2022 report that he had a relationship with a minor in the 1970s. Died in 2024, and MLB lifted the ban in 2025.", D);
  add("Michael Vick", "Football player", "complicated", "Served 21 months in prison after pleading guilty to running a dogfighting ring in 2007. Later returned to the NFL.");
  add("Martha Stewart", "TV host, businesswoman", "complicated", "Convicted in 2004 of obstruction and lying to investigators about a stock sale. Served five months in prison.");
  add("Neil deGrasse Tyson", "Astrophysicist", "complicated", "Accused of sexual misconduct in 2018. After investigations, he kept his jobs at the museum and on TV.");
  add("Caravaggio", "Painter", "complicated", "Killed a man in a fight in 1606 and fled Rome. Died in 1610.", D);
  add("Virginia Woolf", "Author", "complicated", "Her diaries and letters contain antisemitic remarks, even though her husband was Jewish. Dederer discusses her. Died in 1941.", D);
  add("H.P. Lovecraft", "Horror author", "complicated", "His letters and fiction are deeply racist. The World Fantasy Award stopped using his likeness as its trophy in 2015. Died in 1937.", { dead: true, aka: ["hp lovecraft", "lovecraft"] });
  add("Dr. Seuss", "Children's author", "complicated", "His estate stopped publishing six of his books in 2021 because of racist imagery. Died in 1991.", { dead: true, aka: ["dr seuss", "theodor geisel"] });
  add("Enid Blyton", "Children's author", "complicated", "Her books are criticized for racism and xenophobia, and the Royal Mint passed her over for a coin in 2019 for that reason. Died in 1968.", D);
  add("Orson Scott Card", "Author (Ender's Game)", "complicated", "Campaigned against same-sex marriage, including as a board member of the National Organization for Marriage.");
  add("Junot Díaz", "Author", "complicated", "Accused of misconduct in 2018. Reviews by MIT and the Pulitzer board found no grounds to act.", { aka: ["junot diaz"] });

  // ---- In the clear ----
  add("Robert Downey Jr.", "Actor", "clear", "Arrested several times on drug charges in the late 1990s and served about a year in prison. He got sober, rebuilt his career and was pardoned in California in 2015. A redemption story.", { aka: ["rdj", "robert downey jr"] });

  const clear = [
    // [name, known, dead?]
    ["Beyoncé", "Singer"], ["Rihanna", "Singer, businesswoman"], ["Adele", "Singer"], ["Ed Sheeran", "Singer, songwriter"],
    ["Harry Styles", "Singer"], ["Billie Eilish", "Singer"], ["Olivia Rodrigo", "Singer"], ["Sabrina Carpenter", "Singer"],
    ["Dua Lipa", "Singer"], ["Lady Gaga", "Singer, actor"], ["Bruno Mars", "Singer"], ["The Weeknd", "Singer"], ["SZA", "Singer"],
    ["Kendrick Lamar", "Rapper"], ["Bad Bunny", "Singer, rapper"], ["Selena Gomez", "Singer, actor"], ["Miley Cyrus", "Singer"],
    ["Chris Martin", "Singer (Coldplay)"], ["Elton John", "Singer"], ["Paul McCartney", "Musician (The Beatles)"],
    ["Ringo Starr", "Drummer (The Beatles)"], ["Stevie Wonder", "Singer"], ["Bruce Springsteen", "Singer"], ["Joni Mitchell", "Singer, songwriter"],
    ["Tina Turner", "Singer", 1], ["Aretha Franklin", "Singer", 1], ["Whitney Houston", "Singer", 1], ["Prince", "Musician", 1],
    ["Freddie Mercury", "Singer (Queen)", 1], ["Willie Nelson", "Country singer"], ["Johnny Cash", "Country singer", 1],
    ["Shania Twain", "Country singer"], ["Carrie Underwood", "Country singer"], ["Kacey Musgraves", "Country singer"],
    ["Chris Stapleton", "Country singer"], ["Luke Combs", "Country singer"], ["Post Malone", "Singer, rapper"],
    ["Megan Thee Stallion", "Rapper"], ["Lil Nas X", "Rapper"], ["Donald Glover", "Actor, musician (Childish Gambino)"],
    ["Frank Ocean", "Singer"], ["Janelle Monáe", "Singer, actor"], ["Alicia Keys", "Singer"], ["John Legend", "Singer"],
    ["Mariah Carey", "Singer"], ["Celine Dion", "Singer"], ["Norah Jones", "Singer"], ["Hozier", "Singer"], ["Lorde", "Singer"],
    ["Florence Welch", "Singer (Florence + the Machine)"], ["Mitski", "Singer"], ["Phoebe Bridgers", "Singer"],
    ["Lana Del Rey", "Singer"], ["Chappell Roan", "Singer"], ["Charli XCX", "Singer"], ["Troye Sivan", "Singer"],
    ["Shawn Mendes", "Singer"], ["Sam Smith", "Singer"], ["Lewis Capaldi", "Singer"], ["Jon Batiste", "Musician"],
    ["Yo-Yo Ma", "Cellist"], ["Lin-Manuel Miranda", "Composer, actor"], ["Josh Groban", "Singer"], ["Michael Bublé", "Singer"],
    ["Andrea Bocelli", "Tenor"], ["Nick Jonas", "Singer, actor"], ["Niall Horan", "Singer"], ["Louis Tomlinson", "Singer"],
    ["Meryl Streep", "Actor"], ["Denzel Washington", "Actor"], ["Jennifer Aniston", "Actor"], ["Sandra Bullock", "Actor"],
    ["Julia Roberts", "Actor"], ["Leonardo DiCaprio", "Actor"], ["Emma Watson", "Actor"], ["Daniel Radcliffe", "Actor"],
    ["Rupert Grint", "Actor"], ["Emma Stone", "Actor"], ["Ryan Gosling", "Actor"], ["Margot Robbie", "Actor"], ["Zendaya", "Actor"],
    ["Tom Holland", "Actor"], ["Timothée Chalamet", "Actor"], ["Florence Pugh", "Actor"], ["Pedro Pascal", "Actor"],
    ["Oscar Isaac", "Actor"], ["Cillian Murphy", "Actor"], ["Paul Mescal", "Actor"], ["Austin Butler", "Actor"],
    ["Anya Taylor-Joy", "Actor"], ["Jenna Ortega", "Actor"], ["Millie Bobby Brown", "Actor"], ["Hailee Steinfeld", "Actor"],
    ["Saoirse Ronan", "Actor"], ["Viola Davis", "Actor"], ["Octavia Spencer", "Actor"], ["Lupita Nyong'o", "Actor"],
    ["Michael B. Jordan", "Actor"], ["Chadwick Boseman", "Actor", 1], ["Idris Elba", "Actor"], ["Daniel Kaluuya", "Actor"],
    ["Dev Patel", "Actor"], ["Riz Ahmed", "Actor"], ["Mahershala Ali", "Actor"], ["Sterling K. Brown", "Actor"],
    ["Regina King", "Actor, director"], ["Taraji P. Henson", "Actor"], ["Halle Berry", "Actor"], ["Kerry Washington", "Actor"],
    ["Issa Rae", "Actor, writer"], ["Quinta Brunson", "Actor, writer"], ["Ayo Edebiri", "Actor"], ["Jeremy Allen White", "Actor"],
    ["Natalie Portman", "Actor"], ["Anne Hathaway", "Actor"], ["Jennifer Lawrence", "Actor"], ["Jennifer Garner", "Actor"],
    ["Reese Witherspoon", "Actor, producer"], ["Nicole Kidman", "Actor"], ["Cate Blanchett", "Actor"], ["Kate Winslet", "Actor"],
    ["Helen Mirren", "Actor"], ["Judi Dench", "Actor"], ["Maggie Smith", "Actor", 1], ["Emma Thompson", "Actor, writer"],
    ["Olivia Colman", "Actor"], ["Tilda Swinton", "Actor"], ["Frances McDormand", "Actor"], ["Jodie Foster", "Actor, director"],
    ["Sigourney Weaver", "Actor"], ["Jamie Lee Curtis", "Actor"], ["Michelle Yeoh", "Actor"], ["Ke Huy Quan", "Actor"],
    ["Simu Liu", "Actor"], ["Steven Yeun", "Actor"], ["Hugh Jackman", "Actor"], ["Chris Evans", "Actor"],
    ["Chris Hemsworth", "Actor"], ["Mark Ruffalo", "Actor"], ["Paul Rudd", "Actor"], ["Jeff Goldblum", "Actor"],
    ["Jeff Bridges", "Actor"], ["Harrison Ford", "Actor"], ["Mark Hamill", "Actor"], ["Michael J. Fox", "Actor"],
    ["Robin Williams", "Actor, comedian", 1], ["Matthew Perry", "Actor", 1], ["Jason Momoa", "Actor"], ["Dwayne Johnson", "Actor, wrestler"],
    ["Matt Damon", "Actor"], ["George Clooney", "Actor"], ["Will Ferrell", "Actor, comedian"], ["Adam Sandler", "Actor, comedian"],
    ["Steve Carell", "Actor"], ["John Krasinski", "Actor, director"], ["Jim Parsons", "Actor"], ["Bryan Cranston", "Actor"],
    ["Aaron Paul", "Actor"], ["Bob Odenkirk", "Actor"], ["Jon Hamm", "Actor"], ["Sarah Paulson", "Actor"], ["Jessica Chastain", "Actor"],
    ["Amy Adams", "Actor"], ["Amy Poehler", "Actor, comedian"], ["Tina Fey", "Actor, writer"], ["Maya Rudolph", "Actor, comedian"],
    ["Kristen Wiig", "Actor, comedian"], ["Melissa McCarthy", "Actor"], ["Jennifer Coolidge", "Actor"], ["Jennifer Hudson", "Singer, actor"],
    ["Steve Martin", "Actor, comedian"], ["Martin Short", "Actor, comedian"], ["Jason Sudeikis", "Actor"], ["Hannah Waddingham", "Actor"],
    ["Phoebe Waller-Bridge", "Actor, writer"], ["Benedict Cumberbatch", "Actor"], ["Tom Hiddleston", "Actor"], ["Andrew Garfield", "Actor"],
    ["Eddie Redmayne", "Actor"], ["Daniel Craig", "Actor"], ["Ian McKellen", "Actor"], ["Patrick Stewart", "Actor"], ["Henry Cavill", "Actor"],
    ["Keira Knightley", "Actor"], ["Emily Blunt", "Actor"], ["John Boyega", "Actor"], ["Zoe Saldaña", "Actor"], ["Jessica Alba", "Actor"],
    ["Eva Longoria", "Actor"], ["Salma Hayek", "Actor"], ["Penélope Cruz", "Actor"], ["Antonio Banderas", "Actor"], ["Javier Bardem", "Actor"],
    ["Gael García Bernal", "Actor"], ["Diego Luna", "Actor"], ["Rita Moreno", "Actor"], ["America Ferrera", "Actor"], ["Lily Gladstone", "Actor"],
    ["Al Pacino", "Actor"], ["Anthony Hopkins", "Actor"], ["Samuel L. Jackson", "Actor"], ["Laurence Fishburne", "Actor"],
    ["Danny DeVito", "Actor"], ["Bill Nighy", "Actor"], ["Colin Firth", "Actor"], ["Steve Buscemi", "Actor"], ["Viggo Mortensen", "Actor"],
    ["Elijah Wood", "Actor"], ["Sean Astin", "Actor"], ["Orlando Bloom", "Actor"], ["Kristen Bell", "Actor"], ["Kristen Stewart", "Actor"],
    ["Robert Pattinson", "Actor"], ["Jennifer Lopez", "Singer, actor"], ["Mindy Kaling", "Actor, writer"], ["Aubrey Plaza", "Actor"],
    ["Nick Offerman", "Actor"], ["Betty White", "Actor", 1], ["Julie Andrews", "Actor, singer"], ["Fred Rogers", "TV host", 1],
    ["Bob Ross", "Painter, TV host", 1], ["Steve Irwin", "Wildlife TV host", 1], ["David Attenborough", "Naturalist, broadcaster"],
    ["Jane Goodall", "Primatologist", 1],
    ["Greta Gerwig", "Director"], ["Christopher Nolan", "Director"], ["Steven Spielberg", "Director"], ["Martin Scorsese", "Director"],
    ["Jordan Peele", "Director"], ["Guillermo del Toro", "Director"], ["Denis Villeneuve", "Director"], ["Ava DuVernay", "Director"],
    ["Bong Joon-ho", "Director"], ["Hayao Miyazaki", "Animator, director"], ["Taika Waititi", "Director"], ["Wes Anderson", "Director"],
    ["Spike Lee", "Director"], ["Ryan Coogler", "Director"], ["Chloé Zhao", "Director"], ["Sofia Coppola", "Director"],
    ["Kathryn Bigelow", "Director"], ["Peter Jackson", "Director"], ["James Cameron", "Director"], ["George Lucas", "Director"],
    ["Tim Burton", "Director"], ["Barry Jenkins", "Director"], ["Jane Campion", "Director"],
    ["Stephen King", "Author"], ["Toni Morrison", "Author", 1], ["Maya Angelou", "Poet, author", 1], ["Margaret Atwood", "Author"],
    ["Zadie Smith", "Author"], ["Sally Rooney", "Author"], ["John Green", "Author"], ["Rick Riordan", "Author"], ["Suzanne Collins", "Author"],
    ["Haruki Murakami", "Author"], ["Kazuo Ishiguro", "Author"], ["George Saunders", "Author"], ["R.F. Kuang", "Author"],
    ["Brandon Sanderson", "Author"], ["Terry Pratchett", "Author", 1], ["J.R.R. Tolkien", "Author", 1], ["Jane Austen", "Author", 1],
    ["Beatrix Potter", "Children's author", 1], ["Judy Blume", "Author"], ["Ursula K. Le Guin", "Author", 1], ["Octavia E. Butler", "Author", 1],
    ["James Baldwin", "Author", 1], ["Amanda Gorman", "Poet"], ["Ocean Vuong", "Poet, author"], ["Celeste Ng", "Author"],
    ["John Mulaney", "Comedian"], ["Nate Bargatze", "Comedian"], ["Ali Wong", "Comedian"], ["Trevor Noah", "Comedian, host"],
    ["Conan O'Brien", "Comedian, host"], ["Stephen Colbert", "Comedian, host"], ["Jon Stewart", "Comedian, host"], ["Seth Meyers", "Comedian, host"],
    ["Larry David", "Comedian, writer"], ["Tig Notaro", "Comedian"], ["Taylor Tomlinson", "Comedian"], ["Bo Burnham", "Comedian"],
    ["Jim Gaffigan", "Comedian"], ["Mike Birbiglia", "Comedian"], ["Wanda Sykes", "Comedian"], ["Kumail Nanjiani", "Comedian, actor"],
    ["Bowen Yang", "Comedian"], ["Leslie Jones", "Comedian"], ["Kenan Thompson", "Comedian"], ["Nathan Fielder", "Comedian"],
    ["Tim Robinson", "Comedian"], ["Eric André", "Comedian"],
    ["LeBron James", "Basketball player"], ["Serena Williams", "Tennis player"], ["Venus Williams", "Tennis player"], ["Simone Biles", "Gymnast"],
    ["Michael Jordan", "Basketball player"], ["Stephen Curry", "Basketball player"], ["Lionel Messi", "Footballer"], ["Roger Federer", "Tennis player"],
    ["Rafael Nadal", "Tennis player"], ["Usain Bolt", "Sprinter"], ["Megan Rapinoe", "Footballer"], ["Tom Brady", "Football player"],
    ["Patrick Mahomes", "Football player"], ["Travis Kelce", "Football player"], ["Shohei Ohtani", "Baseball player"], ["Caitlin Clark", "Basketball player"],
    ["Naomi Osaka", "Tennis player"], ["Coco Gauff", "Tennis player"], ["Lewis Hamilton", "F1 driver"], ["Wayne Gretzky", "Hockey player"],
    ["Derek Jeter", "Baseball player"], ["Kevin Durant", "Basketball player"], ["Giannis Antetokounmpo", "Basketball player"],
    ["Pelé", "Footballer", 1], ["Muhammad Ali", "Boxer", 1], ["Kareem Abdul-Jabbar", "Basketball player"], ["Magic Johnson", "Basketball player"],
    ["David Beckham", "Footballer"], ["Mia Hamm", "Footballer"], ["Katie Ledecky", "Swimmer"], ["Sue Bird", "Basketball player"],
    ["Jamie Oliver", "Chef"], ["Ina Garten", "Chef, TV host"], ["Guy Fieri", "Chef, TV host"], ["Anthony Bourdain", "Chef, TV host", 1],
    ["Bill Nye", "Science TV host"], ["Hank Green", "YouTuber, author"], ["Marques Brownlee", "YouTuber"], ["Emma Chamberlain", "YouTuber"]
  ];
  for (const [name, known, dead] of clear) add(name, known, "clear", null, { dead: !!dead });
})();
