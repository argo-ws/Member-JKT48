document.addEventListener("DOMContentLoaded", function () {
    const data = [
        {
            name: "Feni Fitryanti",
            nick: "Feni",
            generation: 3,
            birthday: "Sabtu, 16 Januari 1999",
            status: "Reguler",
            announce: "Sabtu, 15 Maret 2014",
        },
        {
            name: "Shania Gracia Harlan",
            nick: "Gracia",
            generation: 3,
            birthday: "Selasa, 31 Agustus 1999",
            status: "Reguler",
            announce: "Sabtu, 15 Maret 2014",
        },
        {
            name: "Gita Sekar Andarini",
            nick: "Gita",
            generation: 6,
            birthday: "Sabtu, 30 Juni 2001",
            status: "Reguler",
            announce: "Minggu, 08 April 2018",
        },
        {
            name: "Angelina Christy",
            nick: "Christy",
            generation: 7,
            birthday: "Senin, 05 Desember 2005",
            status: "Reguler",
            announce: "Sabtu, 29 September 2018",
        },
        {
            name: "Azizi Shafa Asadel",
            nick: "Zee",
            generation: 7,
            birthday: "Minggu, 16 Mei 2004",
            status: "Grad",
            announce: "Sabtu, 29 September 2018",
        },
        {
            name: "Febriola Sinambela",
            nick: "Olla",
            generation: 7,
            birthday: "Sabtu, 26 Februari 2005",
            status: "Reguler",
            announce: "Sabtu, 29 September 2018",
        },
        {
            name: "Freyana Shifa Jayawardana",
            nick: "Freya",
            generation: 7,
            birthday: "Senin, 13 Februari 2006",
            status: "Reguler",
            announce: "Sabtu, 29 September 2018",
        },
        {
            name: "Helisma Mauludzunia Putri Kurnia",
            nick: "Eli",
            generation: 7,
            birthday: "Kamis, 15 Juni 2000",
            status: "Reguler",
            announce: "Sabtu, 29 September 2018",
        },
        {
            name: "Jessica Chandra",
            nick: "Jessi",
            generation: 7,
            birthday: "Jumat, 23 September 2005",
            status: "Reguler",
            announce: "Sabtu, 29 September 2018",
        },
        {
            name: "Mutiara Azzahra Umandana",
            nick: "Muthe",
            generation: 7,
            birthday: "Senin, 12 Juli 2004",
            status: "Reguler",
            announce: "Sabtu, 29 September 2018",
        },
        {
            name: "Cornelia Syafa Vanisa",
            nick: "Oniel",
            generation: 8,
            birthday: "Jumat, 26 Juli 2002",
            status: "Reguler",
            announce: "Sabtu, 27 April 2019",
        },
        {
            name: "Fiony Alveria Tantri",
            nick: "Fiony",
            generation: 8,
            birthday: "Senin, 04 Februari 2002",
            status: "Reguler",
            announce: "Sabtu, 27 April 2019",
        },
        {
            name: "Flora Shafiqa Riyadi",
            nick: "Flora",
            generation: 8,
            birthday: "Senin, 04 April 2005",
            status: "Reguler",
            announce: "Sabtu, 27 April 2019",
        },
        {
            name: "Lulu Azkiya Salsabila",
            nick: "Lulu",
            generation: 8,
            birthday: "Rabu, 23 Oktober 2002",
            status: "Reguler",
            announce: "Sabtu, 27 April 2019",
        },
        {
            name: "Reva Fidela Adel Pantjoro",
            nick: "Adel",
            generation: 8,
            birthday: "Jumat, 14 Juli 2006",
            status: "Grad",
            announce: "Sabtu, 27 April 2019",
        },
        {
            name: "Indah Cahya Nabila",
            nick: "Indah",
            generation: 9,
            birthday: "Selasa, 20 Maret 2001",
            status: "Reguler",
            announce: "Minggu, 01 Desember 2019",
        },
        {
            name: "Kathrina Irene Indarto Putri",
            nick: "Kathrina",
            generation: 9,
            birthday: "Rabu, 26 Juli 2006",
            status: "Reguler",
            announce: "Minggu, 01 Desember 2019",
        },
        {
            name: "Marsha Lenathea Lapian",
            nick: "Marsha",
            generation: 9,
            birthday: "Senin, 09 Januari 2006",
            status: "Reguler",
            announce: "Minggu, 01 Desember 2019",
        },
        {
            name: "Amanda Puspita Sukma Mulyadewi",
            nick: "Amanda",
            generation: 10,
            birthday: "Jumat, 17 Desember 2004",
            status: "Reguler",
            announce: "Kamis, 27 Agustus 2020",
        },
        {
            name: "Aurellia",
            nick: "Lia",
            generation: 10,
            birthday: "Selasa, 29 Oktober 2002",
            status: "Reguler",
            announce: "Kamis, 27 Agustus 2020",
        },
        {
            name: "Callista Alifia Wardhana",
            nick: "Callie",
            generation: 10,
            birthday: "Senin, 08 Agustus 2005",
            status: "Reguler",
            announce: "Kamis, 27 Agustus 2020",
        },
        {
            name: "Gabriela Abigail Mewengkang",
            nick: "Ella",
            generation: 10,
            birthday: "Senin, 07 Agustus 2006",
            status: "Reguler",
            announce: "Kamis, 27 Agustus 2020",
        },
        {
            name: "Indira Putri Seruni",
            nick: "Indira",
            generation: 10,
            birthday: "Senin, 26 April 2004",
            status: "Reguler",
            announce: "Kamis, 27 Agustus 2020",
        },
        {
            name: "Jesslyn Elly",
            nick: "Lyn",
            generation: 10,
            birthday: "Kamis, 13 September 2001",
            status: "Reguler",
            announce: "Kamis, 27 Agustus 2020",
        },
        {
            name: "Raisha Syifa Wardhana",
            nick: "Raisha",
            generation: 10,
            birthday: "Minggu, 11 November 2007",
            status: "Reguler",
            announce: "Kamis, 27 Agustus 2020",
        },
        {
            name: "Alya Amanda",
            nick: "Alya",
            generation: 11,
            birthday: "Sabtu, 26 Agustus 2006",
            status: "Trainee",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Anindya Ramadhani",
            nick: "Anindya",
            generation: 11,
            birthday: "Selasa, 18 Oktober 2005",
            status: "Trainee",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Cathleen Nixie",
            nick: "Cathy",
            generation: 11,
            birthday: "Kamis, 28 Mei 2009",
            status: "Trainee",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Celline Thefani",
            nick: "Elin",
            generation: 11,
            birthday: "Senin, 09 April 2007",
            status: "Trainee",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Chelsea Davina Norman",
            nick: "Chelsea",
            generation: 11,
            birthday: "Rabu, 23 Desember 2009",
            status: "Trainee",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Chynthia Yaputera",
            nick: "Cynthia",
            generation: 11,
            birthday: "Sabtu, 22 November 2003",
            status: "Trainee",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Dena Natalia",
            nick: "Danella",
            generation: 11,
            birthday: "Jumat, 16 Desember 2005",
            status: "Trainee",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Desy Natalia",
            nick: "Daisy",
            generation: 11,
            birthday: "Jumat, 16 Desember 2005",
            status: "Trainee",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Gendis Mayrannisa",
            nick: "Gendis",
            generation: 11,
            birthday: "Rabu, 23 Juni 2010",
            status: "Trainee",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Grace Octaviani",
            nick: "Gracie",
            generation: 11,
            birthday: "Kamis, 18 Oktober 2007",
            status: "Reguler",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Greesella Sophina Adhalia",
            nick: "Greesel",
            generation: 11,
            birthday: "Selasa, 10 Januari 2006",
            status: "Reguler",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Michelle Alexandra",
            nick: "Michie",
            generation: 11,
            birthday: "Rabu, 22 April 2009",
            status: "Trainee",
            announce: "Senin, 31 Oktober 2022",
        },
        {
            name: "Abigail Rachel",
            nick: "Aralie",
            generation: 12,
            birthday: "Rabu, 06 Agustus 2008",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Adeline Wijaya",
            nick: "Delynn",
            generation: 12,
            birthday: "Sabtu, 01 September 2007",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Aurhel Alana",
            nick: "Lana",
            generation: 12,
            birthday: "Kamis, 14 September 2006",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Catherina Vallencia",
            nick: "Erine",
            generation: 12,
            birthday: "Selasa, 21 Agustus 2007",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Fritzy Rosmerian",
            nick: "Fritzy",
            generation: 12,
            birthday: "Senin, 28 Juli 2008",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Hillary Abigail",
            nick: "Lily",
            generation: 12,
            birthday: "Jumat, 19 Oktober 2007",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Jazzlyn Trisha",
            nick: "Trisha",
            generation: 12,
            birthday: "Rabu, 16 Februari 2011",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Letycia Moreen",
            nick: "Moreen",
            generation: 12,
            birthday: "Senin, 07 Juni 2010",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Michelle Levia",
            nick: "Levi",
            generation: 12,
            birthday: "Sabtu, 24 Januari 2009",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Nayla Suji",
            nick: "Nayla",
            generation: 12,
            birthday: "Senin, 18 Juni 2007",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Nina Tutachia",
            nick: "Nachia",
            generation: 12,
            birthday: "Jumat, 16 Oktober 2009",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Oline Manuel",
            nick: "Oline",
            generation: 12,
            birthday: "Sabtu, 03 November 2007",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Ribka Budiman",
            nick: "Ribka",
            generation: 12,
            birthday: "Selasa, 13 Januari 2009",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Regina Wilian",
            nick: "Regie",
            generation: 12,
            birthday: "Kamis, 10 Desember 2009",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Shabilqis Naila",
            nick: "Nala",
            generation: 12,
            birthday: "Senin, 01 September 2008",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
        {
            name: "Victoria Kimberly",
            nick: "Kimmy",
            generation: 12,
            birthday: "Senin, 08 Maret 2010",
            status: "Trainee",
            announce: "Sabtu, 18 November 2023",
        },
    ];

    function calculateDateDifference(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const years = end.getFullYear() - start.getFullYear();
        const days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
        return { years, days };
    }

    function calculateAge(birthday) {
        const today = new Date();
        const birthDate = new Date(birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        return age;
    }

    const tableBody = document.querySelector("#data-table tbody");

    data.forEach((item) => {
        const age = calculateAge(item.birthday);
        const { years: workingYears, days: workingDays } =
            calculateDateDifference(
                item.announce,
                new Date().toISOString().split("T")[0],
            );

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.nick}</td>
            <td>${item.generation}</td>
            <td>${item.birthday}</td>
            <td>${age} years</td>
            <td>${item.status}</td>
            <td>${item.announce}</td>
            <td>${workingYears} years and ${workingDays} days</td>
        `;
        tableBody.appendChild(row);
    });
});
