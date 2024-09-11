import { Routes } from '@angular/router';
import { OverviewComponent } from './modules/overview/overview.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ChuCocodyComponent } from './modules/chu-cocody/chu-cocody.component';
import { LeaveManagementComponent } from './modules/leave-management/leave-management.component';
import { EvaluationComponent } from './modules/evaluation/evaluation.component';
import { FeedbackComponent } from './modules/feedback/feedback.component';
import { NursingSurveysComponent } from './modules/nursing-surveys/nursing-surveys.component';
import { DoctorDentistSurveyComponent } from './modules/doctor-dentist-survey/doctor-dentist-survey.component';
import { StaffComponent } from './modules/staff/staff.component';
import { TeamsComponent } from './modules/teams/teams.component';
import { JobsComponent } from './modules/jobs/jobs.component';
import { JobsByDepartmentComponent } from './modules/jobs-by-department/jobs-by-department.component';
import { RequestsListComponent } from './modules/requests-list/requests-list.component';
import { DepartmentComponent } from './modules/department/department.component';
import { FunctionsComponent } from './modules/functions/functions.component';
import { GradesComponent } from './modules/grades/grades.component';
import { NatureOfContractComponent } from './modules/nature-of-contract/nature-of-contract.component';
import { PrivilegesComponent } from './modules/privileges/privileges.component';
import { RolesComponent } from './modules/roles/roles.component';
import { ServicesComponent } from './modules/services/services.component';
import { UnitsComponent } from './modules/units/units.component';
import { WorkScheduleComponent } from './modules/work-schedule/work-schedule.component';
import { HrDashboardComponent } from './modules/hr-dashboard/hr-dashboard.component';
import { AccessLogComponent } from './modules/access-log/access-log.component';
import { ObjectiveSettingsComponent } from './modules/objective-settings/objective-settings.component';
import { AnnualReviewsComponent } from './modules/annual-reviews/annual-reviews.component';
import { ManagerResponseComponent } from './modules/manager-response/manager-response.component';
import { DevelopmentPlanComponent } from './modules/development-plan/development-plan.component';
import { MyDocsComponent } from './modules/my-docs/my-docs.component';
import { HourlyLeaveComponent } from './modules/hourly-leave/hourly-leave.component';
import { DayLeaveComponent } from './modules/day-leave/day-leave.component';
import { AnnualLeaveComponent } from './modules/annual-leave/annual-leave.component';
import { MaternityLeaveComponent } from './modules/maternity-leave/maternity-leave.component';
import { BonusComponent } from './modules/bonus/bonus.component';
import { PositionsComponent } from './modules/positions/positions.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { AnnualComponent } from './modules/annual/annual.component';
import { FeedbackFormComponent } from './modules/nursing-surveys/feedback-form/feedback-form.component';
import { FeedbackFormDoctorsComponent } from './modules/doctor-dentist-survey/feedback-form-doctors/feedback-form-doctors.component';
import { SubDivisionComponent } from './modules/sub-division/sub-division.component';
import { FeedbackProfileComponent } from './modules/feedback-profile/feedback-profile.component';
import { EmployeeProfileComponent } from './modules/employee-profile/employee-profile.component';
import { MyLeavesComponent } from './modules/my-leaves/my-leaves.component';
import { EmployeeFeedbackComponent } from './modules/employee-feedback/employee-feedback.component';
import { ObjectiveAndAppraisalComponent } from './modules/objective-and-appraisal/objective-and-appraisal.component';
import { MyCollaboratorsComponent } from './modules/my-collaborators/my-collaborators.component';
import { CollaboratorsLeavesComponent } from './modules/collaborators-leaves/collaborators-leaves.component';
import { WorkScheduleTeamComponent } from './modules/work-schedule-team/work-schedule-team.component';
import { SupportsComponent } from './modules/supports/supports.component';
import { ExpressNeedComponent } from './modules/express-need/express-need.component';
import { SickLeavesComponent } from './modules/sick-leaves/sick-leaves.component';
import { TrainingComponent } from './modules/training/training.component';
import { DepartureComponent } from './modules/departure/departure.component';

export const routes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'chucocody',
        component: ChuCocodyComponent
    },
    {
        path: 'myDocs',
        component: MyDocsComponent
    },
    {
        path: 'myLeave',
        component: MyLeavesComponent
    },
    {
        path: 'leaveManagement',

        children: [
            {path: 'hourly', component: HourlyLeaveComponent},
            {path: 'day', component: DayLeaveComponent},
            {path: 'annual', component: AnnualLeaveComponent},
            {path: 'maternity', component: MaternityLeaveComponent}
        ]
    },
    {
        path: 'objectiveSettings',
        component: ObjectiveSettingsComponent
    },
    {
        path: 'evaluation',
        component: EvaluationComponent,
        children: [
            {path: 'annualReviews', component: AnnualReviewsComponent}
        ]
    },
    {
        path: 'bonus',
        component: BonusComponent
    },
    {
        path: 'annual',
        component: AnnualComponent
    },
    {
        path: 'objectivesAndAppraisal',
        component: ObjectiveAndAppraisalComponent
    },
    {
        path: 'annualReviews',
        component: AnnualReviewsComponent
    },
    {
        path: 'managerResponse',
        component: ManagerResponseComponent
    },
    {
        path: 'developmentPlan',
        component: DevelopmentPlanComponent
    },
    {
        path: 'feedback',
        component: FeedbackComponent
    },
    {
        path: 'feedbackProfile',
        component: FeedbackProfileComponent
    },
    {
        path: 'employeeProfile',
        component: EmployeeProfileComponent
    },
    {
        path: 'employeeFeedback',
        component: EmployeeFeedbackComponent
    },
    {
        path: 'nursingSurvey',
        children: [
            {path: '', component: NursingSurveysComponent},
            {path: 'feedbackForm', component: FeedbackFormComponent}
        ]
    },
    {
        path: 'doctorDentistSurvey',
        children: [
            {path: '', component: DoctorDentistSurveyComponent},
            {path: 'feedbackForm', component: FeedbackFormDoctorsComponent}
        ]
    },
    {
        path: 'staff',
        component: StaffComponent
    },
    {
        path: 'addStaff/:formStaff',
        component: ProfileComponent
    },
    {
        path: 'subDivision',
        component: SubDivisionComponent
    },
    {
        path: 'teams',
        component: TeamsComponent
    },
    {
        path: 'jobs',
        component: JobsComponent
    },
    {
        path: 'jobsByDepartment',
        component: JobsByDepartmentComponent
    },
    {
        path: 'requestsList',
        component: RequestsListComponent
    },
    {
        path: 'department',
        component: DepartmentComponent
    },
    {
        path: 'functions',
        component: FunctionsComponent
    },
    {
        path: 'grades',
        component: GradesComponent
    },
    {
        path: 'natureOfContract',
        component: NatureOfContractComponent
    },
    {
        path: 'privileges',
        component: PrivilegesComponent
    },
    {
        path: 'roles',
        component: RolesComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'units',
        component: UnitsComponent
    },
    {
        path: 'workSchedule',
        component: WorkScheduleComponent
    },
    {
        path: 'hrDashboard',
        component: HrDashboardComponent
    },
    {
        path: 'accessLog',
        component: AccessLogComponent
    },
    {
        path: 'positions',
        component: PositionsComponent
    },
    // {
    //     path: '',
    //     redirectTo: 'admin/overview',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: SignUpComponent
    },
    {
        path: 'myCollaborators',
        component: MyCollaboratorsComponent
    },
    {
        path: 'collaboratorsLeaves',
        component: CollaboratorsLeavesComponent
    },
    {
        path: 'teamWorkSchedule',
        component: WorkScheduleTeamComponent
    },
    {
        path: 'myEvaluation',
        component: ObjectiveAndAppraisalComponent
    },
    {
        path: 'supports',
        component: SupportsComponent
    },
    {
        path: 'expressNeed',
        component: ExpressNeedComponent
    },
    {
        path: 'sickLeaves',
        component: SickLeavesComponent
    },
    {
        path: 'training',
        component: TrainingComponent
    },
    {
        path: 'departure',
        component: DepartureComponent
    }
];
