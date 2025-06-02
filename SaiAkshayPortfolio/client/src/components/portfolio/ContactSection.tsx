import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { insertContactMessageSchema, type InsertContactMessage } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { personalInfo } = PORTFOLIO_DATA;
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, and collaborations. 
              Let's connect and create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-200">Email</h4>
                    <p className="text-slate-300">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-200">Phone</h4>
                    <p className="text-slate-300">{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-200">Location</h4>
                    <p className="text-slate-300">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-slate-200 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.linkedin}
                    className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                  <a
                    href={personalInfo.github}
                    className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <i className="fab fa-github text-white"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">First Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-600"
                              placeholder="John"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-600"
                              placeholder="Doe"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-600"
                            placeholder="john@example.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Subject</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-600"
                            placeholder="Project Collaboration"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-600 resize-none"
                            placeholder="Tell me about your project or opportunity..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
