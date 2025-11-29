import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      "service_gustosip",         // YOUR SERVICE ID
      "template_contact",         // YOUR TEMPLATE ID
      {
        user_name: formData.name,
        user_phone: formData.phone,
        user_email: formData.email,
        user_message: formData.message,
      },
      "PtC9JY_8mL0VfdfJt"          // YOUR PUBLIC KEY
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We’ll reply soon!",
      });

      setFormData({ name: "", phone: "", email: "", message: "" });
    })
    .catch(() => {
      toast({
        title: "Error",
        description: "Something went wrong. Try again.",
        variant: "destructive",
      });
    });
};

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold">
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="border-border animate-fade-in-up">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        placeholder="Your message..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-primary hover:opacity-90 transition-smooth"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2">Address</h3>
                        <p className="text-muted-foreground">
                          3/34 Unjapalayam, Odayagoundenpalayam Post,<br />
                          Gobichettipalayam Taluk,<br />
                          Erode District – 638454
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2">Phone</h3>
                        <a
                          href="tel:7708099203"
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          7708099203
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2">Email</h3>
                        <a
                          href="mailto:support@gustosip.com"
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          support@gustosip.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-accent">
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold text-lg mb-3">Business Hours</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Saturday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
