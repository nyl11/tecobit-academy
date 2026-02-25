'use client';

import React from 'react';
import { faqs } from '@/data/faqs';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FAQ() {
    return (
        <section className="py-24 md:py-32 bg-background border-t border-border transition-colors duration-500">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Left Side Header */}
                    <div className="lg:col-span-12 xl:col-span-5 space-y-12 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-black uppercase tracking-[0.3em] text-[10px]">
                                <Sparkles size={14} className="animate-pulse" />
                                Knowledge Base
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-foreground leading-none tracking-tighter uppercase">
                                Common <span className="text-primary">Synchronizations</span>
                            </h2>
                            <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed opacity-80">
                                Detailed insights into our architecture, certification protocols, and career acceleration streams.
                            </p>
                        </motion.div>

                        <div className="p-10 rounded-none bg-muted/50 text-foreground border border-border space-y-8 relative overflow-hidden group shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700">
                            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 rounded-none blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                            <div className="w-16 h-16 bg-card border border-border rounded-none flex items-center justify-center text-primary relative z-10 shrink-0 shadow-lg">
                                <MessageSquare size={28} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black relative z-10 uppercase tracking-tighter">Undefined Queries?</h3>
                                <p className="text-base font-medium text-muted-foreground relative z-10 leading-relaxed opacity-80">
                                    Initialize a direct communication protocol with our architects for project-specific insights.
                                </p>
                            </div>
                            <Button className="bg-primary text-white hover:bg-foreground font-black px-10 py-6 rounded-none transition-all shadow-xl shadow-primary/20 w-full relative z-10 uppercase tracking-[0.2em] text-[11px]">
                                Contact Support
                            </Button>
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <Accordion type="single" collapsible className="w-full space-y-6">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={faq.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <AccordionItem
                                        value={faq.id}
                                        className="border border-border bg-card rounded-none px-10 overflow-hidden transition-all duration-500 hover:border-primary/40 shadow-sm"
                                    >
                                        <AccordionTrigger className="hover:no-underline py-10 text-left group">
                                            <div className="flex items-center gap-4">
                                                <span className="text-2xl md:text-3xl font-black text-foreground group-data-[state=open]:text-primary transition-colors tracking-tight leading-none uppercase">
                                                    {faq.question}
                                                </span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-10">
                                            <p className="text-muted-foreground font-medium text-lg md:text-xl leading-relaxed border-t border-border pt-8 opacity-80">
                                                {faq.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
