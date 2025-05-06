class HomeService {
    private apiBaseUrl: string;

    constructor(){
        this.apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    }

    async getAllPost(): Promise<any> {
        try {
          const response = await fetch(`${this.apiBaseUrl}/jobs`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to fetch job posts");
          }
      
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Job Post Fetching Error", error);
          throw error;
        }
    }      
}

export const homeService = new HomeService()