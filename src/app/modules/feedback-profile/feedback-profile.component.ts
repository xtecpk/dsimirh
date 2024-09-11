import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';

@Component({
  selector: 'app-feedback-profile',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    CommonTableComponent,
    TranslateModule
  ],
  templateUrl: './feedback-profile.component.html',
  styleUrl: './feedback-profile.component.scss'
})
export class FeedbackProfileComponent {

  reviewDataSource = [
    {question: 'A pris soin de vous?', notAllSatisfied: '1', notSatisfied: '12', noOpinion: '13', satisfied: '9', verySatisfied: '3' },
    {question: 'Vous a écouté sans vous presser ni vous interrompre?', notAllSatisfied: '9', notSatisfied: '2', noOpinion: '22', satisfied: '23', verySatisfied: '24' },
    {question: 'A compris vos préoccupations?', notAllSatisfied: '20', notSatisfied: '18', noOpinion: '19', satisfied: '15', verySatisfied: '16' },
    {question: 'Vous a écouté activement et a parlé clairement et calmement?', notAllSatisfied: '10', notSatisfied: '7', noOpinion: '16', satisfied: '19', verySatisfied: '20' },
    {question: 'Vous a montré du respect?', notAllSatisfied: '1', notSatisfied: '10', noOpinion: '13', satisfied: '18', verySatisfied: '22' },
    {question: 'Vous a démontré le désir de vous prodiguer les meilleurs soins possibles?', notAllSatisfied: '24', notSatisfied: '18', noOpinion: '20', satisfied: '24', verySatisfied: '10' },
    {question: "Est toujours resté professionnel?", notAllSatisfied: '5', notSatisfied: '9', noOpinion: '10', satisfied: '7', verySatisfied: '21' },
    {question: 'A répondu à vos besoins et demandes dans les meilleurs délais?', notAllSatisfied: '10', notSatisfied: '11', noOpinion: '12', satisfied: '10', verySatisfied: '18' }
  ];

  reviewColumns = ['Question', 'Not All Satisfied', 'Not Satisfied', 'No Opinion', 'Satisfied', 'Very Satisfied']

}
