import React from 'react';

interface ProfileStats {
  repos: number;
  contributed: number;
  stars: number;
  commits: number;
  followers: number;
  linesOfCode: number;
  additions: number;
  deletions: number;
}

interface ProfileData {
  username: string;
  os: string[];
  uptime: string;
  host: string;
  kernel: string;
  ide: string[];
  languages: {
    programming: string[];
    computer: string[];
    real: string[];
  };
  hobbies: {
    software: string[];
    hardware: string[];
  };
  contact: {
    emailPersonal: string[];
    emailWork: string;
    linkedin: string;
    discord: string;
  };
  stats: ProfileStats;
}

function calculateAge(birthDate: string): string {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // Adjust for negative months or days
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return `${years} years, ${months} months, ${days} days`;
}





const AboutMe: React.FC = () => {
  const profileData: ProfileData = {
    username: "jay@bharambe",
    os: ["Windows 11", "Android 15", "Linux(Ubuntu)"],
    uptime: calculateAge('2003-05-20'),
    host: "Indian Institute of Science Education and Research, Bhopal",
    kernel: "Data Science and Engineering",
    ide: ["VS Code", "Android Studio"],
    languages: {
      programming: ["Dart", "Python", "Java", "JavaScript"],
      computer: ["HTML", "CSS", "JSON", "LaTeX", "YAML"],
      real: ["Marathi", "Hindi", "English"],
    },
    hobbies: {
      software: ["Custom ROM", "Photoshop", "Android Development", "Web Development"],
      hardware: ["Cricket", "Music"],
    },
    contact: {
      emailPersonal: ["jaybharambe42@gmail.com"],
      emailWork: "jaybharambe42@gmail.com",
      linkedin: "jayb71",
      discord: "jaybharambe7",
    },
    // TODO: Fetch the stats from GitHub API
    stats: {
      repos: 95,
      contributed: 133,
      stars: 325,
      commits: 2116,
      followers: 187,
      linesOfCode: 446276,
      additions: 523178,
      deletions: 76992,
    },
  };

  const asciiArt = `
##########################################################################################
##########################################################################################
##########################################################################################
#############################################****##****#####***#**########################
#######################################*#**********************************###############
################################%%%%@@%%%%##*************************************#########
############################%@@@@@@@@@@@@@@@@%#***********************************########
##########################%%%@@@@@@@@@@@@@@@@@%%#***************************************##
#######################**#%@@@@@@@@@@@@@@@@@@@@@%*****************************************
###################*##**#%@@%%%%@@@@@@@@@@@@@@@@@%****************************************
##################*******%@@@@%%%%@@@@@@@@@@@@@@%%#***************************************
##############***********%@%%#***#%%%%%%@@@@@@@@##****************************************
##############***********#@**++++=====*#%%@@@@@%******************************************
##########*#*#************%+==+#**+-+#%####%%@@#****++++++++++++++++++++******************
#########*###************=*+===+++++#%@%#*%%%@@%#++++++++++++++++++++++++++++*+***********
########*****************====-=====+#@@@%**#%@@@%++++++++++++++++++++++++++++++++*********
#########*#**************+===----===##%%#**#%@@%*+++++++++++++++++++++++++++++++++++******
#############*************+===-=+++**%%#**#%%%#++++++++++++++++++++++++++++++++++++++++***
##############**************===++++**%%%%%%%*++++++++++=============++++++++++++++++++++**
###############*************+===--=+*###%%%#++++++++======================++++++++++++++**
###############*********#***+++====+*#%%%%****#*++*+*#*######*++*#*******+*+++++++++++***+
####*################*+-#%*+++++++**#%%@@%%%%%%%%%%%%%%%%%%%%%%%#####**- -+++-:.---==++=++
########%#####*#*****=-:.+*+=====+++*%@@%%%%%%%%%%%%%%%%%%%%%%%%#*###*+::.:--..  .-+-..:..
%%#%#+=*+===+*********+-:::-=======+#%%@%%%%%%%%%%%%%%%%%%%%%%%%#***+++-:    ..  =+-:  ..-
%%#+:...:----=+*+++****+=::.::-====+#%%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##+=++++=-+*+=-:-==
*-.......::::--==+=--=+**+-::::::--=+**###*####**#%%%%%%%%@@@%%%%%%%%%%%%%%%#%#%%%#####%%%
........:::::.-=+-++-::--=++=--:-----=====+++******#%%@@@@@@@@@@@@@@@%%%%%%%%%%%%@@@@@@@@@
.......--.--:.::+*:-+=:::::-=++=-:-=+++========+++++#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
......==..=-:..::**::==-::::::-=+++===++++=======++*#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
.....-#..:=-.....-*#-:-==-:::::::--=+**+++++++++***#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
....-*+.-:=:......-*#-::-==--:---------==++++****+*#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
...-*#:.=:-:.......-*#=::-==--::****#=====+++**++*#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
..-*#+.-=-:.........=##=:::-==--+=#**++==+++++=+*#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
.-*%#.:=+-..........:=#%=:::-===+*#**+++++++++++*%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%
-*%%:-+++::.....:....:+#%-:::--=**++*+++++++++**#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%
#%%+*#%%+::::..:::::..:+%#-====+-====++++++++*##%@@@@@@@@@@@@@@@@@@@@@%%%%%%####%%%%%%%%%%
%#%%@##*:...::.:::::::.:*%#=--=--===+++++++**##%@@@@@@@@@@@@@%%%%%%######%%%%%%%%%%%%%%%%%
%@%@%%+.......:::::::::::*%%*=*++==*+*%*+**#**#@@@@@@%%%%%#######%%%%%%%%%%%%%%%%%%%%%%%%#
%%@@@%=...:....::::::::::-*%%%=+*=+%####****+*%@@@%#######%%%%%%%%%%%%%%%%%%%%%%%%%####***
%%%%@%*...:.....::::::::::-#%@%+==*###%***++*#%@@@%##%%%%%%%%%%%%%%%%%%%%%#######*#******#
%%%%@%=....:.....::::::::::-#%%%*+*+*##*+++*##%@@@@@@%%%%%#%#%%%##%%%#####***********#####
%%%@%*:....:-....::::-::::::-#%%%#*++*++++*##%%%@@@@@@%%###########***********#*##########
%%@@%*:..:..:-:....:--:.:::::=#%%%%#**++***#%%%%@@@@@@@%%##***************##########*#####
%%###*::.:...:-:....--:.::::::=#%%%%%##***##%%%%%@@@@@@@@%************#*****#****#########
=+*#%#::......:-:..:-::.:-:::::=##%%%%%%###%%####%%@@@@@@@#*******************############

  `;


    

  return (
    <div id='AboutMe' className="bg-black text-gray-200 p-8 w-full min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-orange-400 font-mono">About Me</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ASCII Art Section */}
          <div className="flex items-center justify-center overflow-hidden">
            <pre className="text-blue-400 text-xs leading-none whitespace-pre font-mono">
              {asciiArt}
            </pre>
          </div>

          {/* Profile Info Section */}
          <div className="space-y-6 font-mono">
            <div className="space-y-2">
              <div className="text-orange-400">{profileData.username}</div>
              <div className="text-blue-400">OS: {profileData.os.join(", ")}</div>
              <div className="text-orange-400">Uptime: {profileData.uptime}</div>
              <div className="text-blue-400">Host: {profileData.host}</div>
              <div className="text-orange-400">Kernel: {profileData.kernel}</div>
              <div className="text-blue-400">IDE: {profileData.ide.join(", ")}</div>
            </div>

            <div className="space-y-2">
              <div className="text-orange-400">Languages.Programming: {profileData.languages.programming.join(", ")}</div>
              <div className="text-blue-400">Languages.Computer: {profileData.languages.computer.join(", ")}</div>
              <div className="text-orange-400">Languages.Real: {profileData.languages.real.join(", ")}</div>
            </div>

            <div className="space-y-2">
              <div className="text-blue-400">Hobbies.Software: {profileData.hobbies.software.join(", ")}</div>
              <div className="text-orange-400">Hobbies.Hardware: {profileData.hobbies.hardware.join(", ")}</div>
            </div>

            <div className="border-t border-gray-700 pt-4 space-y-2">
              <div className="text-gray-400">- Contact</div>
              <div className="text-orange-400">Email.Personal: {profileData.contact.emailPersonal[0]}</div>
              <div className="text-orange-400">Email.Work: {profileData.contact.emailWork}</div>
              <div className="text-blue-400">LinkedIn: {profileData.contact.linkedin}</div>
              <div className="text-orange-400">Discord: {profileData.contact.discord}</div>
            </div>

            <div className="border-t border-gray-700 pt-4 space-y-2">
              <div className="text-gray-400">- GitHub Stats</div>
              <div className="text-blue-400">
                UserName: <a href='https://github.com/jayb71'>jayb71</a>
                </div>
              {/* <div className="text-blue-400">
                Repos: {profileData.stats.repos} {`{Contributed: ${profileData.stats.contributed}}`} | Stars: {profileData.stats.stars}
              </div>
              <div className="text-orange-400">
                Commits: {profileData.stats.commits} | Followers: {profileData.stats.followers}
              </div>
              <div className="text-blue-400">
                Lines of Code on GitHub: {profileData.stats.linesOfCode} ({profileData.stats.additions}+, {profileData.stats.deletions}-)
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;