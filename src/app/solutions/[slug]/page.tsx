import { notFound } from "next/navigation";
import { solutions } from "@/lib/data";

import { AiAutomationPage } from "@/components/solutions/ai-automation-page";
import { NetworkMonitoringPage } from "@/components/solutions/network-monitoring-page";
import { ZeroTouchDeploymentPage } from "@/components/solutions/zero-touch-deployment-page";
import { ComplianceManagementPage } from "@/components/solutions/compliance-management-page";
import { EntraIdIntunePage } from "@/components/solutions/entra-id-intune-page";
import { EmployeeEngagementPage } from "@/components/solutions/employee-engagement-page";
import { PowerPlatformPage } from "@/components/solutions/power-platform-page";
import { MergersAcquisitionsPage } from "@/components/solutions/mergers-acquisitions-page";


export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((s) => s.slug === params.slug);

  if (!solution) {
    notFound();
  }

  if (params.slug === 'ai-and-automation') {
    return <AiAutomationPage />;
  }
  
  if (params.slug === 'network-monitoring') {
    return <NetworkMonitoringPage />;
  }

  if (params.slug === 'zero-touch-deployment') {
    return <ZeroTouchDeploymentPage />;
  }
  
  if (params.slug === 'compliance-management') {
    return <ComplianceManagementPage />;
  }
  
  if (params.slug === 'entra-id-and-intune-migration') {
    return <EntraIdIntunePage />;
  }
  
  if (params.slug === 'employee-engagement') {
    return <EmployeeEngagementPage />;
  }
  
  if (params.slug === 'business-process-automation') {
    return <PowerPlatformPage />;
  }

  if (params.slug === 'technology-mergers-and-acquisitions') {
    return <MergersAcquisitionsPage />;
  }

  return (
    <div className="container py-12">
        <h1 className="text-4xl font-bold">{solution.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{solution.description}</p>
    </div>
  )
}
