
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  partnerFirstName: z.string().min(1, "First name is required."),
  partnerLastName: z.string().min(1, "Last name is required."),
  partnerCompany: z.string().optional(),
  partnerEmail: z.string().email("Please enter a valid email address."),
  partnerPhone: z.string().optional(),
  currentPartnerStatus: z.string().min(1, "Please select your partner status."),
  aePreference: z.string().optional(),
  referredCompanyName: z.string().min(1, "Referred company name is required."),
  referredNumEmployees: z.string().optional(),
  referredWebsite: z.string().url("Please enter a valid URL."),
  referredContactName: z.string().min(1, "Referred contact name is required."),
  referredContactTitle: z.string().min(1, "Referred contact title is required."),
  referredContactEmail: z.string().email("Please enter a valid email address."),
  referredCity: z.string().optional(),
  referredState: z.string().optional(),
  serviceOffering: z.string().min(1, "Please select a service offering."),
  comments: z.string().optional(),
});

export function PartnerForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Referral Submitted!",
      description: "Thank you for your referral. We will be in touch shortly.",
    });
    form.reset();
  }

  const partnerStatusOptions = [
    "Yes! Avant Partner",
    "Yes! AppDirect Partner",
    "Yes! Evotek Partner",
    "Yes! Referral Partner",
    "Yes! Sandler Partner",
    "Yes! Telarus Partner",
    "Not Yet, But I Would Like To Sign Up & Learn More!",
    "No, This Is A One Time Referral",
  ];
  
  const employeeCountOptions = ["0-50", "50-100", "100-250", "250-500", "500-1000", "1000+"];
  
  const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"];
  
  const serviceOfferings = ["Active Directory", "Azure Infrastructure", "Backup & Disaster Recovery Solution", "Copilot", "CRM Services", "CSP Licensing", "Customer Meeting", "Endpoint Management (EDR)", "Help Desk Services", "Managed IT Services", "Microsoft Consulting", "Microsoft Dynamics", "SharePoint Office 365 Deployment", "Other - Please include details in Comments", "SharePoint", "System Center Suite", "Tenant Migration"];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Partner Information */}
        <div className="space-y-6">
            <h3 className="font-headline text-xl font-bold">Partner Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <FormField name="partnerFirstName" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>First Name*</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField name="partnerLastName" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Last Name*</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
            </div>
            <FormField name="partnerCompany" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Partner Company Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <div className="grid md:grid-cols-2 gap-6">
                <FormField name="partnerEmail" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Email*</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField name="partnerPhone" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Business Phone</FormLabel><FormControl><Input type="tel" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
            </div>
            <FormField name="currentPartnerStatus" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Are You A Current Partner?*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Please select..." /></SelectTrigger></FormControl>
                        <SelectContent>{partnerStatusOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}</SelectContent>
                    </Select><FormMessage />
                </FormItem>
            )}/>
            <FormField name="aePreference" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Managed Solution Account Executive Preference</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
        </div>

        {/* Customer Information */}
        <div className="space-y-6">
            <h3 className="font-headline text-xl font-bold">Customer Information</h3>
            <FormField name="referredCompanyName" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Referred Company Name*</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <FormField name="referredNumEmployees" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Number of Employees</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Please select..." /></SelectTrigger></FormControl>
                        <SelectContent>{employeeCountOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}</SelectContent>
                    </Select><FormMessage />
                </FormItem>
            )}/>
            <FormField name="referredWebsite" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Website URL*</FormLabel><FormControl><Input type="url" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <div className="grid md:grid-cols-2 gap-6">
                <FormField name="referredContactName" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Referred Contact Name*</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField name="referredContactTitle" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Referred Contact Title*</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
            </div>
            <FormField name="referredContactEmail" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Referred Contact Email*</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <div className="grid md:grid-cols-2 gap-6">
                <FormField name="referredCity" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>City</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField name="referredState" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>State/Region</FormLabel>
                         <Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Please select..." /></SelectTrigger></FormControl>
                            <SelectContent>{states.map(state => <SelectItem key={state} value={state}>{state}</SelectItem>)}</SelectContent>
                        </Select><FormMessage />
                    </FormItem>
                )}/>
            </div>
            <FormField name="serviceOffering" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Service Offering Quote Request*</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Please select..." /></SelectTrigger></FormControl>
                        <SelectContent>{serviceOfferings.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}</SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">**Professional Services & Managed Services engagements will require a consultation prior to quoting.</p>
                    <FormMessage />
                </FormItem>
            )}/>
            <FormField name="comments" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Comments</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
        </div>

        <Button type="submit" size="lg" className="w-full">Submit Referral</Button>
      </form>
    </Form>
  );
}
