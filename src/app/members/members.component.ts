import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
})
export class MembersComponent {
  members: any[] = [
    {
      name: 'Dr. Abad, Felise Gabrielle F.',
      description:
        'Dra. Abad specializes in Neurosurgery. She completed a degree in Nursing at Far Eastern University and worked as an Emergency Nurse for 5 years. She finished her degree in Medicine at the University of Manchester, United Kingdom, and also worked there for 3 years. She is currently practicing at Morayta Medical Center and is eager to share her knowledge and expertise in her chosen field.',
      imageUrl: 'assets/abad.JPG',
    },
    {
      name: 'Dr. Angeles, Alexandra Denise A.',
      description:
        'Dr. Alexandra Denise Angeles is dedicated to making a positive impact. With a background in nursing and paramedic science from Far Eastern University and Johns Hopkins University respectively, she served as a military surgeon before specializing in Emergency Medicine, Plastic Surgery, and Psychiatry. Completing her Medicine Course at the University of New South Wales, Sydney, she established clinics globally and actively engages in charitable initiatives. Notably, she contributes to healthcare innovation through robot-making projects, enhancing surgical practices worldwide',
      imageUrl: 'assets/angeles.PNG',
    },
    {
      name: 'Dr. Armero, Kristine Gayle D.',
      description:
        "Dr. Armero is a dedicated pediatrician who embarked on her medical journey with a Bachelor of Science in Nursing from Far Eastern University. Fueled by a passion for pediatric medicine, she pursued her medical education at Duke University School of Medicine, a prestigious institution known for its excellence. Following her training, Dr. Armero committed herself to pediatric care, spending the past five years at St. Luke's Medical Center.",
      imageUrl: 'assets/armero.jpg',
    },
    {
      name: 'Dr. Balmori, Kiann Emil',
      description:
        "Dr. Balmori RN MD, is a distinguished gentleman who is a Registered Nurse and a Doctor of Medicine, he achieved his bachelor's at Far Eastern University and continued his medical school at the University of Hawaii where he lives and performs medicine, currently, he serves as a resident doctor at Morayte Medical Center as he believes his heart lies to serve the Filipino more.",
      imageUrl: 'assets/balmori.JPG',
    },
    {
      name: 'Dr. Baylosis, Katelyn Roze G.',
      description:
        'Dr. Baylosis RN, a distinguished Cardio Surgeon with five years of exemplary experience, graduated from Far Eastern University, earning her Bachelor of Science in Nursing degree and establishing herself as a Registered Nurse. She continued her academic journey at Harvard University, Massachusetts, United States, obtaining her medical degree. Dr. Baylosis, an accomplished author, has contributed significantly to the field of cardiology by writing a seminal book titled "Understanding Cardiologists: Their Role in Advancing Global Health." Currently, she thrives as a leading Cardio Surgeon at Morayta Medical Center, where her expertise and dedication continue to positively impact patient care and surgical innovation.',
      imageUrl: 'assets/baylosis.JPG',
    },
    {
      name: 'Dra. Bendicio, Jane Kyla U.',
      description:
        "Dra. Bendicio is a registered nurse who completed her Bachelor of Science in Nursing at Far Eastern University. Has two years of pediatric nursing experience at Apacible Memorial Hospital. Her goals are to make a significant difference in people's lives by reducing suffering, curing illnesses, and enhancing their health and well-being, as well as assisting needy children living on the streets. She started her medical career at a public hospital before attending the University of Manitoba to obtain her degree. She trained and finished her residency at the Health Sciences Centre Winnipeg. She is currently working in Morayta Medical Center as a pediatrician.",
      imageUrl: 'assets/bendicio.jpg',
    },
    {
      name: 'Dr. Dalmacia, Erika May DC.',
      description:
        'Dr. Dalmacia has 5 years of experience as a General Surgeon in both the public and private sectors. She received her Bachelor of Science in Nursing degree at Far Eastern University and is a Registered Nurse. She then completed her medical degree from St. Luke’s College of Medicine and trained at St. Luke’s Medical Center in Quezon City during her residency. She currently serves as a General Surgeon at Morayta Medical Center.',
      imageUrl: 'assets/dalmacia.JPG',
    },
    {
      name: 'Dr. Dayco, Mary Juliana Shaira L.',
      description:
        "Dr. Juliana Dayco finished her Bachelor of Science in Nursing degree at Far Eastern University - Manila. She completed her medical degree from the University of Sto. tomas and trained at St. Luke's Medical Center. She currently serves as a Neurosurgeon at Morayta Medical Center.",
      imageUrl: 'assets/dayco.JPG',
    },
    {
      name: 'Dr. Ebuen, Cy Eryn L.',
      description:
        'Dr. Ebuen specializes in pediatrics. Her journey began with a Bachelor of Science in Nursing from Far Eastern University, followed by medical school at the University of California, Los Angeles. She has dedicated herself to pediatric care over the past five years at UCLA Medical Center and now at Morayta Medical Center.',
      imageUrl: 'assets/ebuen.PNG',
    },
    {
      name: 'Dr. Esquilona, Nonalyn Joye T.',
      description:
        'Dr. Esquilona is a qualified pediatrician with eight years of expertise. She earned her Registered Nurse degree and her Bachelor of Science in Nursing from Far Eastern University. At Saint Louis University School of Medicine, she pursued her studies further and earned a medical degree. Dr. Esquilona is a dedicated pediatrician who is compassionate and skilled in meeting the individual medical needs of each child while promoting healthy growth and long-term well-being.',
      imageUrl: 'assets/esquilona.JPG',
    },
  ];

  selectedMember:  any = {};

  openMemberModal(member: any): void {
    if (member) {
      this.selectedMember = member;
      const modal = document.getElementById('memberModal');
      if (modal) {
        modal.style.display = 'block';
      }
    }
  }

  closeMemberModal(): void {
    const modal = document.getElementById('memberModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
