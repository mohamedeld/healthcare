export interface Visit {
  id: string;
  patientId: string;
  doctorId: string;
  date: string; // ISO date string
  reason: string;
  notes?: string;
  treatments?: Treatment[];
  totalAmount: string;
}
export interface CreateVisitDTO {
  doctorId: string;
  scheduledDate: string; // ISO date string
  chiefComplaint?: string;
}
export interface UpdateVisitDTO {
  diagnosis?: string;
  notes?: string;
  chiefComplaint?: string;
}

export interface VisitResponse {
  visit: Visit;
}
export interface VisitsListResponse {
  visits: Visit[];
}
export interface Treatment {
  id: string;
  _id: string;
  visitId: string;
  description: string;
  medication?: string;
  dosage?: string;
  totalPrice: number;
}
export interface TreatmentDTO {
  description: string;
  medication?: string;
  dosage?: string;
  unitPrice: number;
  quantity: number;
}
export interface TreatmentResponse {
  treatment: Treatment;
}
export interface TreatmentsListResponse {
  treatments: Treatment[];
}
export interface CompleteVisitResponse {
  message: string;
}
export interface CancelVisitResponse {
  message: string;
}
