// data.ts

// =========================
// TYPES
// =========================

export type Status = "Healthy" | "Warning" | "Critical";

export type Level = "INFO" | "WARNING" | "ERROR" | "DEBUG" | "CRITICAL";

// Service Type
export interface ServiceType {
  id: number;
  name: string;
  status: Status;
  latency: string;
  uptime: string;
  request: number;
  errorRate: string;
}

// =========================
// SERVICES DATA
// =========================

export const services: ServiceType[] = [
  {
    id: 1,
    name: "Auth Service",
    status: "Healthy",
    latency: "120ms",
    uptime: "99.9%",
    request: 15000,
    errorRate: "0.2%",
  },
  {
    id: 2,
    name: "Payment Service",
    status: "Warning",
    latency: "340ms",
    uptime: "98.7%",
    request: 8200,
    errorRate: "1.8%",
  },
  {
    id: 3,
    name: "Database Service",
    status: "Critical",
    latency: "580ms",
    uptime: "94.2%",
    request: 21000,
    errorRate: "4.5%",
  },
];

// =========================
// FUNCTIONS WITH PROMISE
// =========================

// Get All Services
export const getServices = (): Promise<ServiceType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(services);
    }, 2000);
  });
};

// Get Service By ID
export const getServiceById = (
  id: number
): Promise<ServiceType | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const service = services.find(
        (service) => service.id === id
      );

      resolve(service);
    }, 1500);
  });
};