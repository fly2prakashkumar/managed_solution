

import { notFound } from "next/navigation";
import { services } from "@/lib/data";

import { ManagedITPage } from "@/components/services/managed-it-page";
import { CoManagedITPage } from "@/components/services/co-managed-it-page";
import { ITHelpDeskPage } from "@/components/services/it-help-desk-page";
import { CybersecurityPage } from "@/components/services/cybersecurity-page";
import { MicrosoftSecurityPage } from "@/components/services/microsoft-security-page";
import { AzureCloudPage } from "@/components/services/azure-cloud-page";
import { VCIOPage } from "@/components/services/vcio-page";
import { GenericServicePage } from "@/components/services/generic-service-page";
import { AiAutomationPage } from "@/components/services/ai-automation-page";


export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  if (params.slug === 'co-managed-it') {
    return <CoManagedITPage />;
  }
  
  if (params.slug === 'help-desk') {
    return <ITHelpDeskPage />;
  }
  
  if (params.slug === 'cybersecurity') {
    return <CybersecurityPage />;
  }

  if (params.slug === 'microsoft-security') {
    return <MicrosoftSecurityPage />;
  }

  if (params.slug === 'cloud-services') {
    return <AzureCloudPage />;
  }
  
  if (params.slug === 'vcio-consulting') {
    return <VCIOPage />;
  }
  
  if (params.slug === 'ai-and-automation') {
    return <AiAutomationPage />;
  }

  const service = services.find((p) => p.slug === params.slug);

  if (!service) {
    notFound();
  }

  if (params.slug === 'managed-it') {
    return <ManagedITPage />;
  }

  if (params.slug === 'it-consulting' || params.slug === 'data-backup') {
    return <GenericServicePage service={service} />;
  }

  return <GenericServicePage service={service} />;
}
